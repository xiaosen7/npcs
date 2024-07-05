import { EUserThemeMode } from "@/theme/types";
import { keyBy } from "lodash-es";

export const USER_THEMES = [
  {
    value: EUserThemeMode.Light,
    label: "Light",
    icon: "/assets/icons/sun.svg",
  },
  { value: EUserThemeMode.Dark, label: "Dark", icon: "/assets/icons/moon.svg" },
  {
    value: EUserThemeMode.System,
    label: "System",
    icon: "/assets/icons/computer.svg",
  },
] as const;

export const USER_THEME_MAP = keyBy(USER_THEMES, "value");
