import { nunito } from "@/font";
import { ETheme, SyncElementClass, useTheme } from "@/theme";
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
  },
  decorators: [
    (Story, context) => {
      // enable background change to theme change
      const {
        globals: { backgrounds },
      } = context;
      const themeValue =
        backgrounds?.value === "#333333" ? ETheme.Dark : ETheme.Light;

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
