import "@/styles.css";
import type { Preview } from "@storybook/react";
import { useEffect } from "react";

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
      const themeValue = backgrounds?.value === "#333333" ? "dark" : "light";

      useEffect(() => {
        if (themeValue === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, [themeValue]);

      return <Story />;
    },
  ],
};

export default preview;
