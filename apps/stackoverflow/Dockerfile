
FROM node:18-alpine AS base

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


RUN echo ${POSTGRES_PRISMA_URL} >> test.arg

RUN apk update
RUN apk add --no-cache libc6-compat

# RUN npm i nrm -g && nrm use taobao
RUN npm i turbo http-server -g

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

# Run lifecycle scripts
RUN pnpm i --frozen-lockfile
WORKDIR /app/apps/stackoverflow
RUN pnpm prisma generate
RUN nc -zv 127.0.0.1 5432 
RUN pnpm prisma db push --accept-data-loss --force-reset
RUN pnpm prisma db seed
WORKDIR /app
RUN turbo build --env-mode=loose --filter=stackoverflow...

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

CMD ["node", "apps/stackoverflow/server.js"]
# CMD http-server