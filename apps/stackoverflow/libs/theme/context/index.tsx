"use client";

import { EThemeMode } from "@/theme/types";
import React, { createContext, useContext, useEffect, useState } from "react";

interface IThemeContextValue {
  mode: EThemeMode;
  setMode: (mode: EThemeMode) => void;
}

const ThemeContext = createContext<IThemeContextValue | null>(null);

export interface IThemeProviderProps {
  children?: React.ReactNode;
  defaultMode?: EThemeMode;
}

const ThemeProvider: React.FC<IThemeProviderProps> = ({
  children,
  defaultMode,
}) => {
  const [mode, setMode] = useState<EThemeMode>(defaultMode ?? EThemeMode.Light);

  useEffect(() => {
    if (mode) {
      document.documentElement.classList.remove(
        mode === EThemeMode.Light ? EThemeMode.Dark : EThemeMode.Light
      );
      document.documentElement.classList.add(mode);
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

export { ThemeProvider };
