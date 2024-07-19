import { Meta, StoryFn } from "@storybook/react";

import { MobileNav } from "@/layout/components/mobile-nav";

export default {
  component: MobileNav,
  args: {},
} as Meta<typeof MobileNav>;

export const Base: StoryFn<typeof MobileNav> = (args) => (
  <MobileNav className="m-6" {...args} />
);
