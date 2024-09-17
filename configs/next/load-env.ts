// @ts-check

import { createLog } from "@npcs/log";
import dotenv from "dotenv";
import createJiti from "jiti";
import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const IS_PROD = process.env.NODE_ENV === "production";

const log = createLog("env loader");

export function loadAppEnvs() {
  /**
   * local env file should only exists in development environment.
   * In some other environment, such as github actions or docker, local env should extends from externals
   */
  const localEnvPath = existsSync(join(__dirname, ".env.local"))
    ? join(__dirname, ".env.local")
    : "";
  const appLocalEnvPath = existsSync(resolve(".env.local"))
    ? resolve(".env.local")
    : "";
  const envPath = join(__dirname, ".env");
  const devEnvPath = !IS_PROD ? join(__dirname, ".env.development") : "";

  // load from file
  dotenv.config({
    path: [localEnvPath, appLocalEnvPath, envPath, devEnvPath].filter(Boolean),
  });

  // check
  const __filename = fileURLToPath(import.meta.url);
  const jiti = createJiti(__filename);
  const loader = (side: string) => {
    return Object.assign(
      jiti(`@npcs/env/${side}`).env,
      existsSync(resolve(`./src/libs/env/${side}.ts`))
        ? jiti(resolve(`./src/libs/env/${side}.ts`)).env
        : {},
    );
  };

  if (!IS_PROD) {
    const APP_PACKAGE_JSON = JSON.parse(
      readFileSync(resolve("package.json"), "utf-8"),
    );
    const APP_NAME = APP_PACKAGE_JSON.name;
    process.env.DATABASE_URL = `postgresql://postgres:123456@localhost:5432/${APP_NAME.replace("/", "_")}`;
  }

  checkEnv("shared", loader);
  checkEnv("server", loader);
  checkEnv("client", loader);

  function checkEnv(side: string, loader: (id: string) => object) {
    const env = loader(side);
    if (!IS_PROD) {
      log.info(
        `The environment variables in \`${side}\` are as follows (only logs in development):`,
      );
      log.table(Object.entries(env).map(([name, value]) => ({ name, value })));
    }
  }
}
