import { Meta } from "@storybook/react";
import React from "react";

import { Button } from "./button";
import { Toaster } from "./toaster";
import { useToast } from "./use-toast";

const StoryDecorator = (Story: React.FC) => (
  <>
    <Toaster />
    <Story />
  </>
);

export default {
  component: Toaster,
  args: {},
  decorators: [StoryDecorator],
} as Meta<typeof Toaster>;

export const ToastDemo = () => {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        });
      }}
    >
      Show Toast
    </Button>
  );
};
