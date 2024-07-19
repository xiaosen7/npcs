import { Meta, StoryFn } from "@storybook/react";

import { Input } from "@/shared/input";

export default {
  component: Input,
  args: {
    placeholder: "Food Recipe",
  },
} as Meta<typeof Input>;

export const Base: StoryFn<typeof Input> = (args) => <Input {...args} />;
