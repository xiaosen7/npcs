import sharedConfig from "@npc/tailwind-config";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./{app,libs}/**/*.{tsx,css}"],
  presets: [sharedConfig],
  extends: {
    primary: {
      500: "#FF7000",
      100: "#FFF1E6",
    },
    colors: {
      dark: {
        100: "#000000",
        200: "#0F1117",
        300: "#151821",
        400: "#212734",
        500: "#101012",
      },
      light: {
        900: "#FFFFFF",
        800: "#F4F6F8",
        850: "#FDFDFD",
        700: "#DCE3F1",
        500: "#7B8EC8",
        400: "#858EAD",
      },
      "accent-blue": "#1DA1F2",
    },

    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    fontFamily: {
      inter: ["var(--font-inter)"],
      spaceGrotesk: ["var(--font-spaceGrotesk)"],
    },
    boxShadow: {
      "light-100":
        "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
      "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
      "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
      "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
      "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
    },
    screens: {
      xs: "420px",
    },
  },
};

export default config;
