import { Meta, StoryFn } from "@storybook/react";

import { PagePagination } from "./page-pagination";

export default {
  component: PagePagination,
  args: {},
} as Meta<typeof PagePagination>;

export const Base: StoryFn<typeof PagePagination> = () => (
  <PagePagination total={42} />
);
