import type { StorybookConfig } from "@storybook/nextjs";

import sharedConfig from "@npc/storybook-config";

const config: StorybookConfig = {
  ...sharedConfig,
  stories: ["./stories/**/*.stories.tsx"],
  staticDirs: ["../public"],
};

export default config;
