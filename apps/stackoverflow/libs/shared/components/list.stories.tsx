import { Meta, StoryFn } from "@storybook/react";

import { mock } from "@/mock";
import { TagCard } from "@/tag";
import { faker } from "@faker-js/faker";
import { List } from "./list";

export default {
  component: List,
  args: { children: "content" },
} as Meta<typeof List>;

export const Base: StoryFn<typeof List> = () => (
  <List
    className="w-full"
    description={<>{faker.lorem.paragraph()}</>}
    empty={<>No results</>}
    filter={{
      options: mock.filterOption.createMany(10),
    }}
    items={mock.tag.createMany(10)}
    renderItem={(item) => <TagCard tag={item} totalQuestions={10} />}
    search={{
      placeholder: "Search something...",
    }}
    title={"Title"}
    titleExtra={"Title Extra"}
    total={100}
  />
);
