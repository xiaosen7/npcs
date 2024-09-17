import { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";

export default {
  component: Button,
  args: {
    children: "Button",
  },
} as Meta<typeof Button>;

export const Base: StoryObj<typeof Button> = {
  args: {},
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    variant: "secondary",
  },
};

export const Outline: StoryObj<typeof Button> = {
  args: {
    variant: "outline",
  },
};

export const Destructive: StoryObj<typeof Button> = {
  args: {
    variant: "destructive",
  },
};

export const Ghost: StoryObj<typeof Button> = {
  args: {
    variant: "ghost",
  },
};

export const Link: StoryObj<typeof Button> = {
  args: {
    variant: "link",
  },
};
