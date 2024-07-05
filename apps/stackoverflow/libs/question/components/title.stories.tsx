import { Meta, StoryFn } from "@storybook/react";

import { mock } from "@/mock";
import { QuestionTitle } from "./title";

export default {
  component: QuestionTitle,
  args: {
    question: mock.question(),
    level: 2,
  },
} as Meta<typeof QuestionTitle>;

export const Base: StoryFn<typeof QuestionTitle> = (args) => (
  <QuestionTitle {...args} />
);
