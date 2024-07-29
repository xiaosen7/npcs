import { Meta, StoryFn } from "@storybook/react";

import { NoteCard } from "@libs/components/card";
import { fake } from "@libs/fake";
import { storyLog } from "@stories/utils";

export default {
  component: NoteCard,
  args: {
    note: fake.note(),
    actions: {
      remove: storyLog.log,
    },
  },
} as Meta<typeof NoteCard>;

export const Base: StoryFn<typeof NoteCard> = (args) => <NoteCard {...args} />;
