import { Meta, StoryFn } from "@storybook/react";

import { mock } from "@/mock";
import { random } from "lodash-es";
import { ProfileAnsweredQuestionCard } from "./answered-question-card";

export default {
  component: ProfileAnsweredQuestionCard,
  args: {
    answer: mock.answer(),
    editable: true,
    question: mock.question(),
    upVotes: random(0, 9999),
    user: mock.user(),
  },
} as Meta<typeof ProfileAnsweredQuestionCard>;

export const Base: StoryFn<typeof ProfileAnsweredQuestionCard> = (args) => (
  <ProfileAnsweredQuestionCard {...args} />
);
