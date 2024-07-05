This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project is developing.

[Website](https://stack-overflow-clone-next.vercel.app/)

[Storybook](https://stack-overflow-clone-next.vercel.app/storybook-static/index.html)

Technology stack：Next.js、Prisma、Zod、Tailwindcss、Vitest、clsx、ahooks、shadcn/ui、ClerkJS...

## Getting Started

1. Clone this project and run `pnpm install`

2. Setup ClerkJS Api Keys

   You need to register a ClerkJS account，and go to [dashboard](https://dashboard.clerk.com/), click the `Api Keys` menu to create and copy the environment values to `.env.local` file, you can see the `.env.local.example` file to get the required keys.

3. Setup database

   Because this project use postgres to be the database, you can change the postgres url by modifying `.env.development` file, or if you have docker you can start the postgres database by run `docker-compose -f docker-compose.postgres.yml up -d`

4. Run the `pnpm sync:prisma:dev` command, this command will:

   - Generate model typescript declarations
   - Push the state from your Prisma schema to your database
   - Generate seed data into your database

5. Run the `pnpm dev` to start the development server, or run `pnpm dev:storybook` to start the storybook server
