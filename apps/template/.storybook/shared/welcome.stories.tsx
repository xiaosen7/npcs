import { Meta, StoryFn } from "@storybook/react";

import { Welcome } from "@/shared/components/welcome";

export default {
  component: Welcome,
} as Meta<typeof Welcome>;

export const Base: StoryFn<typeof Welcome> = (args) => {
  return <Welcome {...args} />;
};
