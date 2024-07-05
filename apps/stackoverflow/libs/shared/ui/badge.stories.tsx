import { Meta, StoryFn } from "@storybook/react";

import { Badge } from "./badge";

export default {
  component: Badge,
  args: {
    children: "Badge",
  },
} as Meta<typeof Badge>;

export const Base: StoryFn<typeof Badge> = (args) => <Badge {...args} />;
