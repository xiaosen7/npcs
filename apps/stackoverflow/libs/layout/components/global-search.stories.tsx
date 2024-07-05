import { Meta, StoryFn } from "@storybook/react";

import { sleep } from "@/shared";
import { Prisma } from "@prisma/client";
import { GlobalSearch } from "./global-search";

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
