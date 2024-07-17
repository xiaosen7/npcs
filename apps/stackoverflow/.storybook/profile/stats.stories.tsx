import { Meta, StoryFn } from "@storybook/react";

import { ProfileStats } from "@/profile/components/stats";
import { random } from "lodash-es";

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
