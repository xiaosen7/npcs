import { Meta, StoryFn } from "@storybook/react";

import { Textarea } from "./textarea";

export default {
  component: Textarea,
  args: {},
} as Meta<typeof Textarea>;

export const Base: StoryFn<typeof Textarea> = (args) => (
  <Textarea {...args} placeholder="Type your message here." />
);
