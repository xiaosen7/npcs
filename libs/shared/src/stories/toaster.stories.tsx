import { Meta } from "@storybook/react";
import React from "react";

import { Button } from "@/components/button";
import { Toaster } from "@/components/toaster";
import { useToast } from "@/components/use-toast";

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
