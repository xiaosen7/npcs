import { NavLinks } from "@/layout/components/nav-links";
import { Meta, StoryFn } from "@storybook/react";

export default {
  component: NavLinks,
  args: {},
} as Meta<typeof NavLinks>;

export const Base: StoryFn<typeof NavLinks> = (args) => <NavLinks {...args} />;
