import { Meta, StoryFn } from "@storybook/react";

import Play from "./index";

export default {
  component: Play,
  args: {},
} as Meta<typeof Play>;

export const Base: StoryFn<typeof Play> = (args) => <Play {...args} />;
