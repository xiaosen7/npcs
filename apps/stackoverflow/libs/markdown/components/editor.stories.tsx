import { Meta, StoryFn } from "@storybook/react";

import defaultValue from "../assets/example-value.md?raw";
import { MarkdownEditor } from "./editor";

export default {
  component: MarkdownEditor,
  args: {},
} as Meta<typeof MarkdownEditor>;

export const Base: StoryFn<typeof MarkdownEditor> = () => (
  <MarkdownEditor
    className="h-[90vh]"
    value={defaultValue}
    onChange={console.log}
  />
);

export const TestScroll: StoryFn<typeof MarkdownEditor> = () => (
  <div className="w-[300px]">
    <div className="h-screen bg-red-300"></div>
    <MarkdownEditor className="h-[90vh]" onChange={console.log} />
  </div>
);
