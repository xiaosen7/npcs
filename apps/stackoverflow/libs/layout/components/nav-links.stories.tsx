import { Meta, StoryFn } from "@storybook/react";
import { NavLinks } from "./nav-links";

export default {
  component: NavLinks,
  args: {},
} as Meta<typeof NavLinks>;

export const Base: StoryFn<typeof NavLinks> = (args) => <NavLinks {...args} />;
