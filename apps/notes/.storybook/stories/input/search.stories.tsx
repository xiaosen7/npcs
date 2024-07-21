import { Meta, StoryFn } from "@storybook/react";

import { InputSearch } from "@/input/search";

export default {
  component: InputSearch,
  args: {
    placeholder: "Food Recipe",
  },
} as Meta<typeof InputSearch>;

export const Base: StoryFn<typeof InputSearch> = (args) => (
  <InputSearch {...args} />
);
