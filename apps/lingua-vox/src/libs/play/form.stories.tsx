import { Meta, StoryFn } from "@storybook/react";

import { log } from "../log";
import { PlayForm } from "./form";

export default {
  component: PlayForm,
  args: {
    onSubmit: log.log,
  },
} as Meta<typeof PlayForm>;

export const Base: StoryFn<typeof PlayForm> = (args) => <PlayForm {...args} />;
