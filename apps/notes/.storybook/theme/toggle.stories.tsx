import { Meta, StoryFn } from "@storybook/react";

import { ToggleTheme } from "@/theme";

export default {
  component: ToggleTheme,
  args: {},
} as Meta<typeof ToggleTheme>;

export const Base: StoryFn<typeof ToggleTheme> = (args) => (
  <ToggleTheme {...args} />
);
