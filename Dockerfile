FROM node:18-alpine AS base

ARG APP_DIR
ARG APP_PACKAGE_NAME

# turbo
ARG TURBO_TEAM
ENV TURBO_TEAM=${TURBO_TEAM}
ARG TURBO_TOKEN
ENV TURBO_TOKEN=${TURBO_TOKEN}

# clerk
ARG NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=${NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
ARG CLERK_SECRET_KEY
ENV CLERK_SECRET_KEY=${CLERK_SECRET_KEY}

# see https://github.com/prisma/prisma/issues/16901
ENV PRISMA_CLIENT_ENGINE_TYPE=binary

RUN apk update && apk add --no-cache libc6-compat

RUN corepack enable

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
COPY --from=installer --chown=nextjs:nodejs /app/${APP_DIR}/prisma ./${APP_DIR}/prisma

WORKDIR /app/${APP_DIR}

CMD ["sh", "-c", "npx prisma migrate deploy && node server.js"]
