"use client";

import { createTheme, ETheme } from "@npc/theme/light-dark";

const { SyncElementClass, ToggleTheme, useTheme } = createTheme({
  defaultValue: ETheme.Dark,
});

export { ETheme, SyncElementClass, ToggleTheme, useTheme };
