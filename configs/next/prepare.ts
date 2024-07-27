// @ts-check

import dotenv from "dotenv";
import exec from "exec-sh";
import createJiti from "jiti";
import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

if (!process.env.__PREPARED__) {
  process.env.__PREPARED__ = "true";
  prepare();
}

function prepare() {
  const __filename = fileURLToPath(import.meta.url);
  const jiti = createJiti(__filename);

  const APP_NAME = JSON.parse(
    readFileSync(resolve("package.json"), "utf-8"),
  ).name;
  const IS_DEV = process.env.NODE_ENV === "development";

  loadAndCheckEnv();

  if (IS_DEV) {
    process.env.DATABASE_URL = `postgresql://postgres:123456@localhost:5432/${APP_NAME}`;
    exec("pnpm prisma migrate dev && pnpm prisma studio -b false");
  }

  function loadAndCheckEnv() {
    /**
     * local env file should only exists in development environment.
     * In some other environment, such as github actions or docker, local env should extends from externals
     */
    const localEnvPath = existsSync(join(__dirname, ".env.local"))
      ? join(__dirname, ".env.local")
      : "";
    const envPath = join(__dirname, ".env");
    const devEnvPath = IS_DEV ? join(__dirname, ".env.development") : "";

    // load from file
    dotenv.config({
      path: [localEnvPath, envPath, devEnvPath].filter(Boolean),
    });

    // check
    jiti("@npcs/shared/env/server.js");
    jiti("@npcs/shared/env/client.js");
  }
}
