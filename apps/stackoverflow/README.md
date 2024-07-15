# Stackoverflow clone

## Profile

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project is developing.

Technology stack：Next.js、Prisma、Zod、Tailwindcss、Vitest、clsx、ahooks、shadcn/ui、ClerkJS...

## Getting started

1. Setup ClerkJS Api Keys

   You need to register a ClerkJS account，and go to [dashboard](https://dashboard.clerk.com/), click the `Api Keys` menu to create and copy the environment values to `.env.local` file, you can see the `.env.local.example` file to get the required keys.

2. Setup database

   Because this project use postgres to be the database, you can change the postgres url by modifying `.env.development` file

   if you have installed docker, you can run `./deploy/setup-database.sh` script to setup database, then you do not need to update the `.env.development` file.

   Then Run `npm run prisma:sync:dev`, this command will:

   - Delete old data in database
   - Generate model typescript declarations
   - Push the state from your Prisma schema to your database
   - Generate seed data into your database

3. Run `npm run dev` to start the development server, or run `npm run dev:storybook` to start the storybook server

## Deploy this project

run `docker compose -f docker-compose.db.yml` first, and then run `docker compose -f docker-compose.yml`
