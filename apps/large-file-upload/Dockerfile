FROM node:18-alpine AS base

RUN apk update
RUN apk add --no-cache libc6-compat

# RUN npm i nrm -g && nrm use taobao
RUN npm i turbo -g

# This Dockerfile is copy-pasted into our main docs at /docs/handbook/deploying-with-docker.
# Make sure you update both files!

FROM base AS builder
# Set working directory
WORKDIR /app
COPY . .
RUN turbo prune large-file-upload --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN corepack enable && pnpm i --frozen-lockfile

# Build the project
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

# Uncomment and use build args to enable remote caching
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM

# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN

RUN npx turbo build --filter=large-file-upload...

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/large-file-upload/next.config.mjs .
COPY --from=installer /app/apps/large-file-upload/package.json .

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/large-file-upload/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/large-file-upload/.next/static ./apps/large-file-upload/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/large-file-upload/public ./apps/large-file-upload/public

CMD node apps/large-file-upload/server.js