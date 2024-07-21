import { Meta, StoryFn } from "@storybook/react";

import { InputContent } from "@/input/content";

export default {
  component: InputContent,
  args: {
    readOnly: false,
  },
} as Meta<typeof InputContent>;

export const Base: StoryFn<typeof InputContent> = (args) => (
  <InputContent {...args} />
);
