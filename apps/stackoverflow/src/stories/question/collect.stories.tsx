import { Meta, StoryFn } from "@storybook/react";

import { Collect } from "@/question/components/collect";

export default {
  component: Collect,
  args: {},
} as Meta<typeof Collect>;

export const Base: StoryFn<typeof Collect> = (args) => <Collect {...args} />;
