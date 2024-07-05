import { Meta, StoryFn } from "@storybook/react";

import { mock } from "@/mock";
import { RightSidebar } from "./right-sidebar";

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
