import { Meta, StoryFn } from "@storybook/react";

import Video from "./video";

export default {
  component: Video,
  args: {},
} as Meta<typeof Video>;

export const Base: StoryFn<typeof Video> = (args) => <Video {...args} />;
