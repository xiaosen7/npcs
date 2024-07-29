import { Meta, StoryFn } from "@storybook/react";

import { RightSidebar } from "@/layout/components/right-sidebar";
import { mock } from "@/mock";

export default {
  component: RightSidebar,
  args: {
    hotQuestions: mock.question.createMany(5),
    popularTags: mock.tag.createMany(5),
    getTagQuestionCount: (tag) => 10,
  },
} as Meta<typeof RightSidebar>;

export const Base: StoryFn<typeof RightSidebar> = (args) => (
  <RightSidebar {...args} />
);
