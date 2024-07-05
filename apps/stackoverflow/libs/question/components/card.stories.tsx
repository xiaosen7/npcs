import { Meta, StoryFn } from "@storybook/react";

import { mock } from "@/mock";
import { QuestionCard } from "./card";

export default {
  component: QuestionCard,
  args: {
    question: mock.question(),
    tags: mock.tag.createMany([0, 10]),
    creator: mock.user(),
    votes: 10,
  },
} as Meta<typeof QuestionCard>;

export const Base: StoryFn<typeof QuestionCard> = (args) => (
  <QuestionCard {...args} />
);
