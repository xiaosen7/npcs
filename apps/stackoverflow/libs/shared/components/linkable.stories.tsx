import { Meta, StoryFn } from "@storybook/react";

import { Linkable } from "./linkable";

export default {
  component: Linkable,
  args: {},
} as Meta<typeof Linkable>;

export const WithHref: StoryFn<typeof Linkable> = () => (
  <Linkable href="/home">home</Linkable>
);

export const WithoutHref: StoryFn<typeof Linkable> = () => (
  <Linkable>no href</Linkable>
);
