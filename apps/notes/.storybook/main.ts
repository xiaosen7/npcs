import type { StorybookConfig } from "@storybook/nextjs";

import sharedConfig from "@npc/storybook-config";

const config: StorybookConfig = {
  ...sharedConfig,
  stories: ["../src/stories/**/*.stories.tsx"],
  staticDirs: ["../public"],
  webpackFinal(config) {
    const fileLoaderRule = config.module?.rules?.find((rule) =>
      (rule as any).test?.test?.(".svg"),
    ) as any;
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
};

export default config;
