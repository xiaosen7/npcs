import { Meta, StoryFn } from "@storybook/react";

import { DownVote } from "./down-vote";

export default {
  component: DownVote,
  args: {
    count: 10,
    voted: false,
  },
} as Meta<typeof DownVote>;

export const Base: StoryFn<typeof DownVote> = (args) => <DownVote {...args} />;
