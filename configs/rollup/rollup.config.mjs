/* eslint-disable import/no-anonymous-default-export */

import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import fg from "fast-glob";
import del from "rollup-plugin-delete";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import preserveDirectives from "rollup-plugin-preserve-directives";
import { typescriptPaths } from "rollup-plugin-typescript-paths";

/** @type {import('rollup').RollupOptions} */
export default {
  input: fg.sync(["./src/**/*.{ts,tsx}", "!**/*.stories.*"]),
  output: {
    format: "esm",
    preserveModules: true,
    preserveModulesRoot: "./src",
    dir: "./esm",
    sourcemap: true,
  },
  watch: {
    include: "./src",
    buildDelay: 300,
  },
  plugins: [
    typescript({
      jsx: "react",
      outputToFilesystem: true,
      compilerOptions: {
        declaration: true,
        outDir: "./esm",
        rootDir: "./src",
        incremental: false,
        jsx: "react-jsx",
      },
      exclude: ["**/*.stories.*"],
    }),
    resolve(),
    typescriptPaths(),
    peerDepsExternal({
      includeDependencies: true,
    }),
    preserveDirectives(),
    postcss({ extract: true }),
    del({ targets: ["esm/"] }),
  ],
  onwarn: (warning, warn) => {
    if (warning.code === "MODULE_LEVEL_DIRECTIVE") return;
    warn(warning);
  },
};
