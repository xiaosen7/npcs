import { Meta, StoryFn } from "@storybook/react";

import { EditAndDelete } from "@/shared/components/edit-and-delete";

export default {
  component: EditAndDelete,
  args: {},
} as Meta<typeof EditAndDelete>;

export const Base: StoryFn<typeof EditAndDelete> = (args) => (
  <EditAndDelete {...args} />
);
