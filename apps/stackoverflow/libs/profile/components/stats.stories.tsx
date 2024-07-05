import { Meta, StoryFn } from "@storybook/react";

import { random } from "lodash-es";
import { ProfileStats } from "./stats";

export default {
  component: ProfileStats,
  args: {
    totalAnswers: random(0, 100),
    totalQuestions: random(0, 100),
    reputation: random(0, 100),
    badges: {
      gold: random(0, 100),
      bronze: random(0, 100),
      silver: random(0, 100),
    },
  },
} as Meta<typeof ProfileStats>;

export const Base: StoryFn<typeof ProfileStats> = (args) => (
  <ProfileStats {...args} />
);
