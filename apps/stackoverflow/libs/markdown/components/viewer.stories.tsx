import { Meta, StoryFn } from "@storybook/react";

import { Button } from "@/shared";
import { useState } from "react";
import exampleValue from "../assets/example-value.md?raw";
import { MarkdownViewer } from "./viewer";

export default {
  component: MarkdownViewer,
} as Meta<typeof MarkdownViewer>;

export const Base: StoryFn<typeof MarkdownViewer> = () => {
  const [value, setValue] = useState(exampleValue);

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
