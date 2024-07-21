import { Meta, StoryFn } from "@storybook/react";

import { IconEdit } from "@/assets/icon/edit";
import { ButtonIcon } from "@/button/icon";

export default {
  component: IconEdit,
} as Meta<typeof IconEdit>;

export const Base: StoryFn<typeof IconEdit> = (args) => (
  <ButtonIcon {...args}>
    <IconEdit alt="edit" />
  </ButtonIcon>
);
