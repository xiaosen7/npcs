import { Meta, StoryFn } from "@storybook/react";

import { AnswerForm } from "@/answer/components/form";
import { sleep } from "@/shared/utils/sleep";
import { storyLog } from "@stories/utils";

export default {
  component: AnswerForm,
  args: {
    onSubmit: (values) => sleep(1000).then(() => storyLog.log(values)),
  },
} as Meta<typeof AnswerForm>;

export const Base: StoryFn<typeof AnswerForm> = (args) => (
  <AnswerForm {...args} />
);
