import { Meta } from "@storybook/react";

import { Button } from "@/button/button";

export default {
  component: Button,
  args: {
    children: "Button",
  },
} as Meta<typeof Button>;

export const Success = {
  args: {
    variant: "success",
  },
};
export const Danger = {
  args: {
    variant: "danger",
  },
};
