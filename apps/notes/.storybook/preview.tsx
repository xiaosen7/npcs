import { nunito } from "@/font";
import { ETheme, SyncElementClass, useTheme } from "@/theme";
import { DARK, LIGHT } from "@/theme/variables";
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";
import type { Preview } from "@storybook/react";
import { useEffect } from "react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: "iphone14promax",
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: DARK.bgPrimary,
        },
        {
          name: "light",
          value: LIGHT.bgPrimary,
        },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      // enable background change to theme change
      const {
        globals: { backgrounds },
      } = context;

      const themeValue =
        backgrounds?.value === LIGHT.bgPrimary ? ETheme.Light : ETheme.Dark;

      const theme = useTheme();

      useEffect(() => {
        theme.set(themeValue);
      }, [themeValue]);

      useEffect(() => {
        document.body.classList.add(nunito.className); // font
      }, []);

      return (
        <>
          <Story />
          <SyncElementClass />
        </>
      );
    },
  ],
};

export default preview;
