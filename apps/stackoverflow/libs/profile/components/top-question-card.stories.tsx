import { Meta, StoryFn } from "@storybook/react";

import { mock } from "@/mock";
import { random } from "lodash-es";
import { ProfileTopQuestionCard } from "./top-question-card";

export default {
  component: ProfileTopQuestionCard,
  args: {
    question: mock.question(),
    tags: mock.tag.createMany([0, 10]),
    votes: random(0, 9999),
    user: mock.user(),
  },
} as Meta<typeof ProfileTopQuestionCard>;

export const Base: StoryFn<typeof ProfileTopQuestionCard> = (args) => (
  <ProfileTopQuestionCard {...args} />
);
