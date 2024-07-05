import { EFormTopic, Input } from "@/shared";
import { Meta, StoryFn } from "@storybook/react";
import { z } from "zod";
import { Form, IFormItem } from "./form";

const schema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  age: z.string().min(2),
});

type IValues = z.infer<typeof schema>;

const items: IFormItem<IValues>[] = [
  {
    name: "username",
    label: "username",
    renderControl: (field) => <Input placeholder="shadcn" {...field} />,
    description: "This is your public display name.",
  },
  {
    name: "age",
    label: "age",
    renderControl: (field) => <Input placeholder="shadcn" {...field} />,
    description: "This is your public display age.",
  },
];

export default {
  component: Form,
} as Meta<typeof Form>;

export const Base: StoryFn<typeof Form> = () => {
  const onSubmit = async (values: IValues) => {
    alert(JSON.stringify(values));
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <Form
      items={items}
      schema={schema}
      topic={EFormTopic.Profile}
      onSubmit={onSubmit}
    />
  );
};
