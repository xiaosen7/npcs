import sharedConfig from "@npc/storybook-config";
import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  ...sharedConfig,
  stories: ["./**/*.stories.tsx"],
  staticDirs: ["../public"],
};
export default config;
