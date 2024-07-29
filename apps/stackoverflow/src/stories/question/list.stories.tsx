import { Meta, StoryFn } from "@storybook/react";

import { mock } from "@/mock";
import { QuestionList } from "@/question/components/list";

export default {
  component: QuestionList,
  args: {
    questions: mock.question.createMany(10),
    getAuthor: () => mock.user(),
    getTags: () => mock.tag.createMany([0, 10]),
    getVotes: () => mock.user.createMany(10),
  },
} as Meta<typeof QuestionList>;

export const Base: StoryFn<typeof QuestionList> = (args) => (
  <QuestionList {...args} />
);
