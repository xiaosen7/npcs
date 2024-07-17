import { Meta, StoryFn } from "@storybook/react";

import { mock } from "@/mock";
import { ProfileTopQuestionCard } from "@/profile/components/top-question-card";
import { random } from "lodash-es";

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
