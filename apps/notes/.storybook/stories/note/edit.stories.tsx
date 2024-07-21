import { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { NoteEdit } from "@/note/edit";

export default {
  component: NoteEdit,
  args: {},
} as Meta<typeof NoteEdit>;

export const Base: StoryFn<typeof NoteEdit> = (args) => <NoteEdit {...args} />;
