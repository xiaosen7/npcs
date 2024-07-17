import sharedConfig from "@next.js-practical-cases/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./{app,libs}/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
