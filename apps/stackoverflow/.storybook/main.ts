import sharedConfig from "@npcs/storybook-config";
import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  ...sharedConfig,
  stories: ["./**/*.stories.tsx"],
  staticDirs: ["../public"],
};
export default config;
