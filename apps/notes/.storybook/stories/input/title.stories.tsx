import { Meta, StoryFn } from "@storybook/react";

import { InputTitle } from "@/input/title";

export default {
  component: InputTitle,
  args: {
    readOnly: false,
  },
} as Meta<typeof InputTitle>;

export const Base: StoryFn<typeof InputTitle> = (args) => (
  <InputTitle {...args} />
);
