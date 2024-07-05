"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/shared";

import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { USER_THEMES, USER_THEME_MAP } from "../constants";
import { useTheme } from "../context";
import { EUserThemeMode } from "../types";
import {
  getThemeModeFromUserThemeMode,
  reloadUserThemeMode,
  saveUserThemeMode,
} from "../utils";

export interface IThemeProps {}

const ThemeSwitcher: React.FC<IThemeProps> = () => {
  const { mode, setMode } = useTheme();
  const [userThemeMode, setUserThemeMode] = useState<EUserThemeMode>(
    reloadUserThemeMode()
  );

  useEffect(() => {
    saveUserThemeMode(userThemeMode);
    setMode(getThemeModeFromUserThemeMode(userThemeMode));
  }, [userThemeMode, setMode]);

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          <Image
            alt="moon"
            className="active-theme"
            height={20}
            src={USER_THEME_MAP[mode].icon}
            width={20}
          />
        </MenubarTrigger>

        <MenubarContent className="absolute -right-12 my-2 mt-3 min-w-[120px] rounded border dark:border-dark-400 dark:bg-dark-300">
          {USER_THEMES.map(({ icon, label, value }) => (
            <MenubarItem
              key={value}
              className="flex cursor-pointer items-center gap-4 px-2.5 py-2"
              onClick={() => {
                setUserThemeMode(value);
              }}
            >
              <Image
                alt={value}
                className={userThemeMode === value ? "active-theme" : ""}
                height={16}
                src={icon}
                width={16}
              />

              <p
                className={clsx(
                  "body-semibold text-light-500",
                  userThemeMode === value
                    ? "text-primary-500"
                    : "text-dark100_light900"
                )}
              >
                {label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export { ThemeSwitcher };
