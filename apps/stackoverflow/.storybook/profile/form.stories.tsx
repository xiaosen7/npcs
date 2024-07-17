import { Meta, StoryFn } from "@storybook/react";

import { mock } from "@/mock";
import { ProfileForm } from "@/profile/components/form";

export default {
  component: ProfileForm,
  args: {
    onSubmit: console.log,
    defaultValues: mock.user(),
  },
} as Meta<typeof ProfileForm>;

export const Base: StoryFn<typeof ProfileForm> = (args) => (
  <ProfileForm {...args} />
);
