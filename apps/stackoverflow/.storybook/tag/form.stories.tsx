import { Meta, StoryFn } from "@storybook/react";

import { sleep } from "@/shared";
import { TagForm } from "@/tag/components/form";

export default {
  component: TagForm,
  args: {
    onSubmit: console.log,
    checkNameUniq: (name) =>
      sleep(1000).then(() => !["react", "vue"].includes(name)),
  },
} as Meta<typeof TagForm>;

export const Base: StoryFn<typeof TagForm> = (args) => <TagForm {...args} />;
