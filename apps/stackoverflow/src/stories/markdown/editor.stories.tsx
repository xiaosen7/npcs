import { Meta, StoryFn } from "@storybook/react";

import { MarkdownEditor } from "@/markdown/components/editor";
import { EXAMPLE_MARKDOWN } from "@/markdown/constants/example-markdown";
import { storyLog } from "@stories/utils";

export default {
  component: MarkdownEditor,
  args: {},
} as Meta<typeof MarkdownEditor>;

export const Base: StoryFn<typeof MarkdownEditor> = () => (
  <MarkdownEditor className="h-[90vh]" value={EXAMPLE_MARKDOWN} />
);

export const TestScroll: StoryFn<typeof MarkdownEditor> = () => (
  <div className="w-[300px]">
    <div className="h-screen bg-red-300"></div>
    <MarkdownEditor className="h-[90vh]" onChange={storyLog.log} />
  </div>
);
