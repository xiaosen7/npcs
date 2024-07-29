import { IS_SERVER_SIDE } from "@/shared";
import { EThemeMode, EUserThemeMode } from "../types";

export const saveUserThemeMode = (userThemeMode: EUserThemeMode) => {
  if (IS_SERVER_SIDE) {
    return;
  }
  localStorage.userThemeMode = userThemeMode;
};

export const reloadUserThemeMode = (): EUserThemeMode => {
  if (IS_SERVER_SIDE) {
    return EUserThemeMode.Light;
  }
  return localStorage.userThemeMode ?? EUserThemeMode.Light;
};

export const reloadThemeMode = (): EThemeMode => {
  const userThemeMode = reloadUserThemeMode();
  return getThemeModeFromUserThemeMode(userThemeMode);
};

export function getThemeModeFromUserThemeMode(mode: EUserThemeMode) {
  if (IS_SERVER_SIDE) {
    return EThemeMode.Light;
  }

  switch (mode) {
    case EUserThemeMode.System: {
      const preferDark = !!window.matchMedia("(prefers-color-scheme:dark)")
        .matches;
      return preferDark ? EThemeMode.Dark : EThemeMode.Light;
    }

    default: {
      return mode as unknown as EThemeMode;
    }
  }
}
