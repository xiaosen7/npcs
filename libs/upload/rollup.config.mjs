/* eslint-disable import/no-anonymous-default-export */
// @ts-check

/** @type {import('rollup').RollupOptions} */
export default {
  input: "src/main.js",
  output: {
    file: "bundle.js",
    format: "cjs",
    preserveModules: true,
    preserveModulesRoot: "./src",
  },
};
