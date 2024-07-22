import { Meta, StoryFn } from "@storybook/react";

import { ButtonFixed } from "@libs/components/button/float";
import { IconPlus } from "@libs/components/icon/plus";

console.log({ IconPlus });

export default {
  component: ButtonFixed,
  args: {
    children: <IconPlus />,
  },
} as Meta<typeof ButtonFixed>;

export const Base: StoryFn<typeof ButtonFixed> = (args) => (
  <ButtonFixed {...args} />
);
