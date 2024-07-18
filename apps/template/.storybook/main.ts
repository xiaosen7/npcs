import type { StorybookConfig } from "@storybook/nextjs";

import sharedConfig from "@next.js-practical-cases/storybook-config";

const config: StorybookConfig = {
  ...sharedConfig,
  staticDirs: ["../public"],
};

export default config;
