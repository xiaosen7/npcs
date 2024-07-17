import { Meta, StoryFn } from "@storybook/react";

import { Navbar } from "@/layout/components/navbar";

export default {
  component: Navbar,
  args: {},
} as Meta<typeof Navbar>;

export const Base: StoryFn<typeof Navbar> = (args) => (
  <div>
    <p>Resize to see its responsiveness</p>
    <Navbar {...args} />
  </div>
);
