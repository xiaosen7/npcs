import { Meta, StoryFn } from "@storybook/react";

import { mock } from "@/mock";
import { ISafeAny, sleep } from "@/shared";
import { random } from "lodash-es";
import { TagsEditor } from "./tags-editor";

export default {
  component: TagsEditor,
  args: {
    searchApi(keywords, value) {
      return sleep(1000).then(() =>
        mock.tag
          .createMany(random(3, 20))
          .map((x) => ({ ...x, count: random(100, 1000) }))
      );
    },
    defaultValue: mock.tag.createMany(2),
    searchedTagTotalQuestionsPaths: "count" as ISafeAny,
  },
} as Meta<typeof TagsEditor>;

export const Base: StoryFn<typeof TagsEditor> = (args) => (
  <TagsEditor {...args} />
);
