import { Meta, StoryFn } from "@storybook/react";

import { GlobalSearch } from "@/layout/components/global-search";
import { Prisma } from "@/prisma/generated";
import { sleep } from "@/shared";

export default {
  component: GlobalSearch,
  args: {
    api: (types, value) =>
      sleep(1000).then(() => [
        {
          type: Prisma.ModelName.Question,
          title: "mock title",
          link: "?aaa",
        },
      ]),
  },
} as Meta<typeof GlobalSearch>;

export const Base: StoryFn<typeof GlobalSearch> = (args) => (
  <GlobalSearch {...args} />
);
