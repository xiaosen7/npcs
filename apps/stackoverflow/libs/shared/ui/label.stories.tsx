import { Meta, StoryFn } from "@storybook/react";

import { Label } from "./label";

export default {
  component: Label,
  args: {},
} as Meta<typeof Label>;

export const Default: StoryFn<typeof Label> = () => (
  <Label htmlFor="email">Your email address</Label>
);
