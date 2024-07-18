import sharedConfig from "@npc/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./app/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
