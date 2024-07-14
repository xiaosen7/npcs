import type { StorybookConfig } from "@storybook/nextjs";
import { DefinePlugin } from "webpack";
import { merge } from "webpack-merge";

const config: StorybookConfig = {
  stories: [
    "../libs/*/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../libs/*/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-storysource",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  webpackFinal(config) {
    // copy env if it is built in vercel
    if (!process.env.VERCEL) {
      return config;
    }

    return merge(config, {
      plugins: [
        new DefinePlugin({
          "process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY": JSON.stringify(
            process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
          ),
          "process.env.CLERK_SECRET_KEY": JSON.stringify(
            process.env.CLERK_SECRET_KEY
          ),
          "process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL": JSON.stringify(
            process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL
          ),
          "process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL": JSON.stringify(
            process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL
          ),
          "process.env.NEXT_PUBLIC_TINY_MCE_API_KEY": JSON.stringify(
            process.env.NEXT_PUBLIC_TINY_MCE_API_KEY
          ),
        }),
      ],
    });
  },
  staticDirs: ["../public"],
};
export default config;
