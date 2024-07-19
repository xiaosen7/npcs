import { Meta, StoryFn } from "@storybook/react";

import { AnswerForm } from "@/answer/components/form";
import { sleep } from "@/shared/utils/sleep";

export default {
  component: AnswerForm,
  args: {
    onSubmit: (values) => sleep(1000).then(() => console.log(values)),
  },
} as Meta<typeof AnswerForm>;

export const Base: StoryFn<typeof AnswerForm> = (args) => (
  <AnswerForm {...args} />
);
