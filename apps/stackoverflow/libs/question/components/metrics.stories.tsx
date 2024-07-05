import { Meta, StoryFn } from "@storybook/react";

import { QuestionMetrics } from "./metrics";

export default {
  component: QuestionMetrics,
  args: {
    answers: 1239,
    views: 823749,
    votes: 92,
  },
} as Meta<typeof QuestionMetrics>;

export const Base: StoryFn<typeof QuestionMetrics> = (args) => (
  <QuestionMetrics {...args} />
);
