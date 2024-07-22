import { Meta, StoryFn } from "@storybook/react";

import {
  SaveButtonForAdd,
  SaveButtonForEdit,
} from "@libs/components/edit/save-button";

export default {
  component: SaveButtonForAdd,
  args: {},
} as Meta<typeof SaveButtonForAdd>;

export const Add: StoryFn<typeof SaveButtonForAdd> = (args) => (
  <SaveButtonForAdd {...args} />
);

export const Edit: StoryFn<typeof SaveButtonForEdit> = (args) => (
  <SaveButtonForEdit {...args} />
);
