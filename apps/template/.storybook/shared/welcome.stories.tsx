import { Meta, StoryFn } from "@storybook/react";

import { Welcome } from "@/libs/shared/components/welcome";

export default {
  component: Welcome,
  args: {
    className: "border",
  },
} as Meta<typeof Welcome>;

export const Base: StoryFn<typeof Welcome> = (args) => {
  return <Welcome {...args} />;
};
