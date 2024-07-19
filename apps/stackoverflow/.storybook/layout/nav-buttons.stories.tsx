import { Meta, StoryFn } from "@storybook/react";

import { NavButtons } from "@/layout/components/nav-buttons";

export default {
  component: NavButtons,
  args: {},
} as Meta<typeof NavButtons>;

export const Base: StoryFn<typeof NavButtons> = (args) => (
  <NavButtons {...args} />
);
