import { TsconfigPathsPlugin } from "@esbuild-plugins/tsconfig-paths";
import { defineConfig } from "tsup";

export default defineConfig({
  esbuildPlugins: [TsconfigPathsPlugin({})],
  platform: "node",
  noExternal: [/.*/],
});
