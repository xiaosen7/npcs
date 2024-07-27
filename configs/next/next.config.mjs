// @ts-check

import dotenv from "dotenv";
import createJiti from "jiti";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { merge } from "webpack-merge";

const FILENAME = fileURLToPath(import.meta.url);
const DIRNAME = dirname(FILENAME);
const jiti = createJiti(FILENAME);

/**
 * local env file should only exists in development environment.
 * In some other environment, such as github actions or docker, local env should extends from externals
 */
const localEnvPath = join(DIRNAME, ".env.local");
const envPath = join(DIRNAME, ".env");
dotenv.config({
  path: existsSync(localEnvPath) ? [localEnvPath, envPath] : [envPath],
});

jiti("@npcs/shared/env/server.js");
jiti("@npcs/shared/env/client.js");

/** @type {import('next').NextConfig} */
const sharedNextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (/** @type {{ test: { test: (arg0: string) => any; }; }} */ rule) =>
        rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return merge(config, {
      module: {
        rules: [
          {
            resourceQuery: /raw/,
            type: "asset/source",
          },
        ],
      },
    });
  },
  output: "standalone",
  experimental: {
    outputFileTracingIncludes: {
      "/": ["./prisma/**/*", "./node_modules/prisma/**"],
    },
  },
};

export { sharedNextConfig };
export default sharedNextConfig;
