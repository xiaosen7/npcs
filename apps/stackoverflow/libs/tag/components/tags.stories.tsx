import { Meta, StoryFn } from "@storybook/react";

import { mock } from "@/mock";
import { Tags } from "./tags";

export default {
  component: Tags,
  args: {
    tags: mock.tag.createMany([0, 20]),
  },
} as Meta<typeof Tags>;

export const Base: StoryFn<typeof Tags> = (args) => <Tags {...args} />;
