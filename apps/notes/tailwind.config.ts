import sharedConfig from "@npc/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./{src,.storybook}/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
