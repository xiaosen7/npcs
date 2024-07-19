import { Meta, StoryFn } from "@storybook/react";

import { LeftSidebar } from "@/layout/components/left-sidebar";

export default {
  component: LeftSidebar,
  args: {},
} as Meta<typeof LeftSidebar>;

export const Base: StoryFn<typeof LeftSidebar> = (args) => (
  <LeftSidebar {...args} />
);
