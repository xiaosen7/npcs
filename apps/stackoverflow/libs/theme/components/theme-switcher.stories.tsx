import { Meta, StoryFn } from "@storybook/react";

import { ThemeProvider } from "../context";
import { ThemeSwitcher } from "./theme-switcher";

export default {
  component: ThemeSwitcher,
  args: {},
} as Meta<typeof ThemeSwitcher>;

export const Default: StoryFn<typeof ThemeSwitcher> = (args) => (
  <ThemeProvider>
    <ThemeSwitcher {...args} />
  </ThemeProvider>
);
