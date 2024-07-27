FROM node:18-alpine AS base

ARG APP_DIR
ARG APP_PACKAGE_NAME

# turbo
ARG TURBO_TEAM
ENV TURBO_TEAM=${TURBO_TEAM}
ARG TURBO_TOKEN
ENV TURBO_TOKEN=${TURBO_TOKEN}

RUN apk update && apk add --no-cache libc6-compat

RUN corepack enable

# see https://github.com/prisma/prisma/issues/16901
ENV PRISMA_CLIENT_ENGINE_TYPE=binary

# 构建阶段，安装所有必要的构建工具
FROM base AS builder
WORKDIR /app
COPY . .
RUN pnpx turbo@2.0.9 prune ${APP_PACKAGE_NAME} --docker

# 安装依赖阶段
FROM base AS installer
RUN apk update && apk add --no-cache python3 make g++
WORKDIR /app
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm i --frozen-lockfile --ignore-scripts

# 构建项目
COPY --from=builder /app/out/full/ .
# 触发 postinstall hook
RUN pnpm i --frozen-lockfile
COPY turbo.json turbo.json

# Use `prisma generate` to generate the prisma engine, this is needed by prisma client.
WORKDIR /app/${APP_DIR}
RUN pnpm prisma generate

WORKDIR /app
RUN pnpm turbo build --filter=${APP_PACKAGE_NAME}...

# 最终的运行阶段，只包含必要的运行时依赖
FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs
USER nextjs
COPY --from=installer /app/${APP_DIR}/next.config.mjs .
COPY --from=installer /app/${APP_DIR}/package.json .
COPY --from=installer --chown=nextjs:nodejs /app/${APP_DIR}/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/${APP_DIR}/.next/static ./${APP_DIR}/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/${APP_DIR}/public ./${APP_DIR}/public

WORKDIR /app/${APP_DIR}

CMD ["sh", "-c", "pnpx prisma migrate deploy && node server.js"]
