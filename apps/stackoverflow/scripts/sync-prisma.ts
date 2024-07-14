import execSh from "exec-sh";

execSh("npx prisma db push && npx prisma db seed");
