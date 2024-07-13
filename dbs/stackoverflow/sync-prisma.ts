import execSh from "exec-sh";

execSh(
  "npx prisma generate && npx prisma db push --accept-data-loss --force-reset && npx prisma db seed"
);
