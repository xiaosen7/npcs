import { Meta, StoryFn } from "@storybook/react";

import { EFormType } from "@/shared";
import { QuestionForm } from "./form";

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
