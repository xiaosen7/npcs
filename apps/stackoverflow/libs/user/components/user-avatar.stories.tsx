import { Meta, StoryFn } from "@storybook/react";

import { mock } from "@/mock";
import { UserAvatar } from "./user-avatar";

export default {
  component: UserAvatar,
  args: {
    user: mock.user(),
  },
} as Meta<typeof UserAvatar>;

export const Base: StoryFn<typeof UserAvatar> = (args) => (
  <UserAvatar {...args} />
);

export const Large = {
  args: {
    size: "large",
  },
};
