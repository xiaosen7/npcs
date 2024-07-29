import { Meta, StoryFn } from "@storybook/react";

import { EXAMPLE_MARKDOWN } from "@/markdown/assets/example-markdown";
import { MarkdownViewer } from "@/markdown/components/viewer";
import { Button } from "@/shared";
import { useState } from "react";

export default {
  component: MarkdownViewer,
} as Meta<typeof MarkdownViewer>;

export const Base: StoryFn<typeof MarkdownViewer> = () => {
  const [value, setValue] = useState(EXAMPLE_MARKDOWN);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Button onClick={() => setValue((prev) => `new value \n${prev}`)}>
          Change value
        </Button>
      </div>
      <MarkdownViewer value={value} />
    </div>
  );
};
