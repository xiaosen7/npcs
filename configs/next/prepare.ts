// @ts-check

import exec from "exec-sh";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { loadAppEnvs } from "./load-env";

const IS_DEV = process.env.NODE_ENV === "development";

if (!process.env.__PREPARED__) {
  process.env.__PREPARED__ = "true";
  prepare();
}

function prepare() {
  loadAppEnvs();

  if (IS_DEV) {
    processPrismaDevFlow();
  }
}

function processPrismaDevFlow() {
  const APP_PACKAGE_JSON = JSON.parse(
    readFileSync(resolve("package.json"), "utf-8"),
  );

  const hasSeed = !!APP_PACKAGE_JSON?.prisma?.seed;
  exec(
    `pnpm prisma migrate dev ${hasSeed ? `&& pnpm prisma db seed` : ""} && pnpm prisma studio -b false`,
    {
      stdio: "inherit",
    },
  );
}
