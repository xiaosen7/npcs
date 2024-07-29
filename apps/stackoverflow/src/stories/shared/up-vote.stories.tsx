import { Meta, StoryFn } from "@storybook/react";

import { UpVote } from "@/shared/components/up-vote";

export default {
  component: UpVote,
  args: {
    count: 10,
    voted: false,
  },
} as Meta<typeof UpVote>;

export const Base: StoryFn<typeof UpVote> = (args) => <UpVote {...args} />;
