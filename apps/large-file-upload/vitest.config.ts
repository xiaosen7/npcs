import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-plugin-tsconfig-paths";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  test: {
    environment: "jsdom",
    globals: true,
    include: ["tests/**/*.ts?(x)"],
    exclude: [...configDefaults.exclude, "**/test-utils.ts"],
  },
});
