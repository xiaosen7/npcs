import { Meta, StoryFn } from "@storybook/react";

import { ButtonIcon } from "@libs/components/button/icon";
import IconEdit from "../../../public/icon/edit.svg";

export default {
  component: ButtonIcon,
} as Meta<typeof ButtonIcon>;

export const Base: StoryFn<typeof ButtonIcon> = (args) => (
  <ButtonIcon {...args}>
    <IconEdit alt="edit" />
  </ButtonIcon>
);

export const Disabled: StoryFn<typeof ButtonIcon> = (args) => (
  <ButtonIcon disabled {...args}>
    <IconEdit alt="edit" />
  </ButtonIcon>
);
