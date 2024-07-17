import { Meta, StoryFn } from "@storybook/react";

import { GitLog } from "@/shared/components/git-log";

export default {
  component: GitLog,
  args: {},
} as Meta<typeof GitLog>;

export const Base: StoryFn<typeof GitLog> = (args) => <GitLog {...args} />;
