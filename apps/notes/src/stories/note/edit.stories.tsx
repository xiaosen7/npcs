import { Meta, StoryFn } from "@storybook/react";

import { NoteEdit } from "@libs/components/edit/edit";
import { ENoteEditMode } from "@libs/components/edit/types";
import { fake } from "@libs/fake";
import { storyLog } from "@stories/utils";

export default {
  component: NoteEdit,
  args: {
    actions: {
      save: storyLog.log,
    },
  },
} as Meta<typeof NoteEdit>;

export const Add: StoryFn<typeof NoteEdit> = (args) => <NoteEdit {...args} />;
export const Edit: StoryFn<typeof NoteEdit> = (args) => (
  <NoteEdit note={fake.note()} {...args} />
);
export const Preview: StoryFn<typeof NoteEdit> = (args) => (
  <NoteEdit defaultMode={ENoteEditMode.Preview} note={fake.note()} {...args} />
);
