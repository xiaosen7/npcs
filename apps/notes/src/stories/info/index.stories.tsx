import { Meta, StoryFn } from "@storybook/react";

import { InfoButton } from "@libs/components/info";

export default {
  component: InfoButton,
  args: {},
} as Meta<typeof InfoButton>;

export const Base: StoryFn<typeof InfoButton> = (args) => (
  <InfoButton {...args} />
);
