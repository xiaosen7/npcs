"use client";

import { createTheme as _createTheme } from ".";

export enum ETheme {
  Light = "light",
  Dark = "dark",
}

interface IOptions {
  defaultValue: ETheme;
}
export function createTheme(options: IOptions) {
  return _createTheme({
    defaultValue: options.defaultValue,
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
}
