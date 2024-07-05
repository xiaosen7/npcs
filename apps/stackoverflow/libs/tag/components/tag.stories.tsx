import { Meta, StoryFn } from "@storybook/react";
import { Tag } from "./tag";

export default {
  component: Tag,
  args: {
    tag: {
      name: "tag",
      id: String(1),
    },
    totalQuestions: 5,
  },
} as Meta<typeof Tag>;

export const Base: StoryFn<typeof Tag> = (args) => <Tag {...args} />;
