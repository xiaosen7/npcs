
FROM node:18-alpine AS base

ARG APP_DIR
ARG APP_PACKAGE_NAME

# Set args to env
# postgres
ARG POSTGRES_PRISMA_URL
ENV POSTGRES_PRISMA_URL=${POSTGRES_PRISMA_URL}
ARG POSTGRES_URL_NON_POOLING
ENV POSTGRES_URL_NON_POOLING=${POSTGRES_URL_NON_POOLING}
# clerk
ARG NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=${NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
ARG CLERK_SECRET_KEY
ENV CLERK_SECRET_KEY=${CLERK_SECRET_KEY}
# turbo
ARG TURBO_TEAM
ENV TURBO_TEAM=${TURBO_TEAM}
ARG TURBO_TOKEN
ENV TURBO_TOKEN=${TURBO_TOKEN}

RUN apk update
RUN apk add --no-cache libc6-compat

RUN npm i turbo -g

FROM base AS builder
WORKDIR /app
COPY . .
RUN turbo prune ${APP_PACKAGE_NAME} --docker

# First install the dependencies (as they change less often)
FROM base AS installer
WORKDIR /app
# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN corepack enable && pnpm i --frozen-lockfile --ignore-scripts

# Build the project
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
# Run the lifecycle scripts
RUN pnpm i --frozen-lockfile
# seed database
WORKDIR /app/${APP_DIR}
RUN pnpm prisma:generate
RUN pnpm prisma:sync
WORKDIR /app
RUN turbo build --env-mode=loose --filter=${APP_PACKAGE_NAME}...

# Copy the built app to the runner
FROM base AS runner
WORKDIR /app
# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
COPY --from=installer /app/${APP_DIR}/next.config.mjs .
COPY --from=installer /app/${APP_DIR}/package.json .
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/${APP_DIR}/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/${APP_DIR}/.next/static ./${APP_DIR}/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/${APP_DIR}/public ./${APP_DIR}/public

WORKDIR /app/${APP_DIR}

CMD ["node", "server.js"]