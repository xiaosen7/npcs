import { Meta, StoryFn } from "@storybook/react";

import { ThemeSwitcher } from "@/theme/components/theme-switcher";
import { ThemeProvider } from "@/theme/context";

export default {
  component: ThemeSwitcher,
  args: {},
} as Meta<typeof ThemeSwitcher>;

export const Default: StoryFn<typeof ThemeSwitcher> = (args) => (
  <ThemeProvider>
    <ThemeSwitcher {...args} />
  </ThemeProvider>
);
