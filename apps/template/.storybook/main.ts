import type { StorybookConfig } from "@storybook/nextjs";

import sharedConfig from "@npc/storybook-config";

const config: StorybookConfig = {
  ...sharedConfig,
  staticDirs: ["../public"],
};

export default config;
