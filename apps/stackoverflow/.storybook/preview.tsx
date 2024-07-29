import { EThemeMode, ThemeProvider, useTheme } from "@/theme";
import { ClerkProvider } from "@clerk/nextjs";
import type { Preview } from "@storybook/react";
import { useEffect } from "react";
import "../app/globals.css";

import { Toaster } from "@/shared";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

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
      const backgroundMode =
        backgrounds?.value === "#333333" ? EThemeMode.Dark : EThemeMode.Light;

      const { setMode } = useTheme();

      useEffect(() => {
        setMode(backgroundMode);
      }, [backgroundMode]);

      return <Story />;
    },

    (Story, context) => {
      const {
        globals: { backgrounds },
      } = context;
      const backgroundMode =
        backgrounds?.value === "#333333" ? EThemeMode.Dark : EThemeMode.Light;

      // global providers
      useEffect(() => {
        document.body.classList.add(inter.variable); // font
      }, []);
      return (
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
          <ThemeProvider defaultMode={backgroundMode}>
            <Story />

            <Toaster />
          </ThemeProvider>
        </ClerkProvider>
      );
    },
  ],
};

export default preview;
