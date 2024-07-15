import { TsconfigPathsPlugin } from "@esbuild-plugins/tsconfig-paths";
import fg from "fast-glob";
import path from "path";
import { defineConfig } from "tsup";

export default defineConfig({
  esbuildPlugins: [TsconfigPathsPlugin({})],
  platform: "node",
  entry: fg.sync(["./src/**/*.{ts,tsx}"]),
  splitting: true,
  dts: true,
  esbuildOptions(options) {
    options.alias = {
      "@next.js-practical-cases/upload": path.resolve("src"),
    };
  },
});
