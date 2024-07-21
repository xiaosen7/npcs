import { Meta, StoryFn } from "@storybook/react";

import { SearchInput } from "@/search/input";

export default {
  component: SearchInput,
  args: {
    placeholder: "Food Recipe",
  },
} as Meta<typeof SearchInput>;

export const Base: StoryFn<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);
