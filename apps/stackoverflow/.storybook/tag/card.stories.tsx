import { Meta, StoryFn } from "@storybook/react";

import { mock } from "@/mock";
import { TagCard } from "@/tag/components/card";

export default {
  component: TagCard,
  args: {
    tag: mock.tag(),
    totalQuestions: 10,
  },
} as Meta<typeof TagCard>;

export const Base: StoryFn<typeof TagCard> = (args) => <TagCard {...args} />;
