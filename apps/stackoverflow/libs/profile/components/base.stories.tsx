import { Meta, StoryFn } from "@storybook/react";

import { mock } from "@/mock";
import { ProfileBase } from "./base";

export default {
  component: ProfileBase,
  args: {
    user: mock.user(),
  },
} as Meta<typeof ProfileBase>;

export const Base: StoryFn<typeof ProfileBase> = (args) => (
  <ProfileBase {...args} />
);
