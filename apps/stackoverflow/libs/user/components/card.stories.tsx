import { Meta, StoryFn } from "@storybook/react";

import { mock } from "@/mock";
import { UserCard } from "./card";

export default {
  component: UserCard,
  args: {
    user: mock.user(),
    tags: mock.tag.createMany([0, 10]),
  },
} as Meta<typeof UserCard>;

export const Base: StoryFn<typeof UserCard> = (args) => <UserCard {...args} />;
