import { Meta, StoryFn } from "@storybook/react";

import { QuestionForm } from "@/question/components/form";
import { EFormType } from "@/shared";

export default {
  component: QuestionForm,
  args: {},
} as Meta<typeof QuestionForm>;

export const Post: StoryFn<typeof QuestionForm> = (args) => (
  <QuestionForm {...args} />
);

export const Edit: StoryFn<typeof QuestionForm> = (args) => (
  <QuestionForm
    {...args}
    defaultValues={{
      tags: ["react"],
      explanation: "",
      title: "",
    }}
    type={EFormType.Edit}
  />
);
