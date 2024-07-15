import sharedConfig from "@next.js-practical-cases/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./**/*.tsx", "!./node_modules", "!./dist", "!./.turbo"],
  presets: [sharedConfig],
};

export default config;
