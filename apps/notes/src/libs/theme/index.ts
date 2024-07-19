import { createTheme } from "@npc/theme";

export enum ETheme {
  Light = "light",
  Dark = "dark",
}

export const { SyncElementClass, ToggleTheme, useTheme } = createTheme({
  defaultValue: ETheme.Dark,
  ui: [
    {
      icon: "🌙",
      value: ETheme.Dark,
    },
    {
      icon: "☀️",
      value: ETheme.Light,
    },
  ],
});
