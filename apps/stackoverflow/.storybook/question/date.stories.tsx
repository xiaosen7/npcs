import { Meta, StoryFn } from "@storybook/react";

import { mock } from "@/mock";
import { QuestionDate } from "@/question/components/date";

export default {
  component: QuestionDate,
  args: {
    question: mock.question(),
  },
} as Meta<typeof QuestionDate>;

export const Base: StoryFn<typeof QuestionDate> = (args) => (
  <QuestionDate {...args} />
);
