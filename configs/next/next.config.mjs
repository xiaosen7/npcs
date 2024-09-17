// @ts-check

import createJiti from "jiti";
import { fileURLToPath } from "node:url";
import { merge } from "webpack-merge";

const __filename = fileURLToPath(import.meta.url);
const jiti = createJiti(__filename);
jiti("./prepare.ts");

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

    const mdxRule = config.module.rules.find(
      (/** @type {{ test: { test: (arg0: string) => any; }; }} */ rule) =>
        rule.test?.test?.(".mdx") && !rule.test.test(".md")
    );

    // Ignore node-specific modules when bundling for the browser
    // See https://webpack.js.org/configuration/resolve/#resolvealias
    config.resolve.alias = {
      ...config.resolve.alias,
      sharp$: false,
      "onnxruntime-node$": false,
    };

    return merge(config, {
      module: {
        rules: [
          {
            resourceQuery: /raw/,
            type: "asset/source",
          },
          mdxRule
            ? {
                ...mdxRule,
                test: /\.md$/,
              }
            : null,
        ],
      },
    });
  },
  output: "standalone",
  experimental: {
    outputFileTracingIncludes: {
      "/": ["./prisma/**/*", "./node_modules/.prisma/**/*"],
    },
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};

export { sharedNextConfig };
export default sharedNextConfig;
