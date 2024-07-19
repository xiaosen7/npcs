import { Meta, StoryFn } from "@storybook/react";

import { Skeleton } from "@/components/skeleton";

export default {
  component: Skeleton,
  args: {},
} as Meta<typeof Skeleton>;

export const Base: StoryFn<typeof Skeleton> = (args) => (
  <Skeleton className="h-[20px] w-[100px] rounded-full" />
);
