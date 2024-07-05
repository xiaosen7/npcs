import { Meta, StoryFn } from "@storybook/react";

import { sleep } from "@/shared";
import { AnswerForm } from "./form";

export default {
  component: AnswerForm,
  args: {
    onSubmit: (values) => sleep(1000).then(() => console.log(values)),
  },
} as Meta<typeof AnswerForm>;

export const Base: StoryFn<typeof AnswerForm> = (args) => (
  <AnswerForm {...args} />
);
