ARG POSTGRES_URL_NON_POOLING
ARG POSTGRES_PRISMA_URL

FROM node:18-alpine AS base

ENV POSTGRES_PRISMA_URL=$POSTGRES_PRISMA_URL
ENV POSTGRES_URL_NON_POOLING=$POSTGRES_URL_NON_POOLING

RUN apk update
RUN apk add --no-cache libc6-compat

RUN npm i nrm -g && nrm use taobao
RUN npm i turbo -g





# This Dockerfile is copy-pasted into our main docs at /docs/handbook/deploying-with-docker.
# Make sure you update both files!

FROM base AS builder
# Set working directory
WORKDIR /app
COPY . .
RUN turbo prune stackoverflow --docker

# Add lockfile and package.json's of isolated subworkspace
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

# Uncomment and use build args to enable remote caching
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM

# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN

# Run lifecycle scripts
RUN pnpm i --frozen-lockfile 
RUN pnpm --filter=stackoverflow run prisma:sync
RUN turbo build --filter=stackoverflow...

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/stackoverflow/next.config.mjs .
COPY --from=installer /app/apps/stackoverflow/package.json .

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/stackoverflow/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/stackoverflow/.next/static ./apps/stackoverflow/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/stackoverflow/public ./apps/stackoverflow/public

CMD node apps/stackoverflow/server.js