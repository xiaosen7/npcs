import { Meta, StoryFn } from "@storybook/react";

import { Button } from "@/components/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form";
import { Input } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { capitalCase } from "change-case";
import {
  ControllerRenderProps,
  FieldValues,
  Path,
  useForm,
} from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  age: z.string().min(1).max(2),
});

type ISchemaType = z.infer<typeof formSchema>;

type IITem<
  TValues extends FieldValues,
  TName extends Path<TValues> = Path<TValues>,
> =
  TName extends Path<TValues>
    ? {
        name: TName;
        label: string;
        renderControl: (
          field: ControllerRenderProps<TValues, TName>,
        ) => JSX.Element;
        description: string;
      }
    : never;

const items: IITem<ISchemaType>[] = [
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
  args: {},
} as Meta<typeof Form>;

export const Base: StoryFn<typeof Form> = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {items.map(({ name, description, label, renderControl }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{capitalCase(label)}</FormLabel>
                <FormControl>{renderControl(field as any)}</FormControl>
                <FormDescription>{description}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
