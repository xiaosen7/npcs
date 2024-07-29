import { Meta, StoryFn } from "@storybook/react";

import { DefaultLayout } from "@/layout/components/default-layout";

export default {
  component: DefaultLayout,
  args: { children: "content" },
} as Meta<typeof DefaultLayout>;

export const Base: StoryFn<typeof DefaultLayout> = (args) => (
  <DefaultLayout style={{ height: `calc(100vh - 32px)` }} {...args}>
    {"content".repeat(1000)}
  </DefaultLayout>
);
