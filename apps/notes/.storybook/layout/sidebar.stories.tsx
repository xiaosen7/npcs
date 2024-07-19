import { Meta, StoryFn } from "@storybook/react";

import { Sidebar } from "@/layout/sidebar";

export default {
  component: Sidebar,
  args: {},
} as Meta<typeof Sidebar>;

export const Base: StoryFn<typeof Sidebar> = (args) => <Sidebar {...args} />;
