import sharedConfig from "@npcs/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.{tsx,css}"],
  presets: [sharedConfig],
};

export default config;
