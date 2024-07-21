import { Meta, StoryFn } from "@storybook/react";

import { IconPlus } from "@/assets/icon/plus";
import { ButtonFixed } from "@/button/float";

export default {
  component: ButtonFixed,
  args: {
    children: <IconPlus size="xxl" alt="plus" />,
  },
} as Meta<typeof ButtonFixed>;

export const Base: StoryFn<typeof ButtonFixed> = (args) => (
  <ButtonFixed {...args} />
);
