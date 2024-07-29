import { Meta, StoryFn } from "@storybook/react";

import { SearchInput } from "@/shared/components/search-input";

export default {
  component: SearchInput,
  args: {},
} as Meta<typeof SearchInput>;

export const Base: StoryFn<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);
