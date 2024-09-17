"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRequest } from "ahooks";
import { capitalCase } from "change-case";
import { capitalize, lowerCase, omit } from "lodash-es";
import {
  ControllerRenderProps,
  FieldValues,
  Path,
  UseFormProps,
  UseFormReturn,
  useForm as rcUseForm,
} from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";

import React from "react";

import { IComponentBaseProps } from "@/types";
import { cn, mp, removeNilKeys } from "../utils";
import { Button } from "./button";
import { Input } from "./input";
import { toast } from "./use-toast";

type _IFormBuilderItem<
  TValues extends FieldValues,
  TName extends Path<TValues> = Path<TValues>,
> =
  TName extends Path<TValues>
    ? {
        name: TName;
        label?: string;
        renderControl?: (
          field: ControllerRenderProps<TValues, TName>,
        ) => JSX.Element;
        description?: string;
        disabled?: boolean;
      }
    : never;

export type IFormBuilderItem<TValues extends FieldValues> =
  _IFormBuilderItem<TValues>;

export type IFormBuilderItems<TValues extends FieldValues> =
  IFormBuilderItem<TValues>[];

export type IFormBuilderPropsOnSubmit<TValues extends FieldValues> = (
  values: TValues,
) => void | Promise<void>;

export enum EFormBuilderType {
  Edit = "Edit",
  Post = "Post",
}

export interface IFormBuilderProps<TSchema extends z.ZodObject<any>>
  extends IComponentBaseProps {
  items: IFormBuilderItem<z.infer<TSchema>>[];
  onSubmit?: IFormBuilderPropsOnSubmit<z.infer<TSchema>>;
  getSubmitText?: (loading: boolean, type: EFormBuilderType) => React.ReactNode;
  /**
   * @default 'left'
   */
  submitAlign?: "left" | "right";
  extra?: React.ReactNode;
  defaultValues?: {
    [K in keyof z.infer<TSchema>]: z.infer<TSchema>[K] | null;
  };
  schema: TSchema;
  /**
   * @default EFormType.Post
   */
  type?: EFormBuilderType;

  topic?: string;
}

export const FormBuilder = <TSchema extends z.ZodObject<any>>(
  props: IFormBuilderProps<TSchema>,
) => {
  const {
    items,
    onSubmit,
    submitAlign = "left",
    extra,
    defaultValues,
    schema,
    type = EFormBuilderType.Post,
    getSubmitText = getDefaultSubmitText,
    topic,
  } = props;
  const { run, loading } = useRequest(async (values) => onSubmit?.(values), {
    manual: true,
    onSuccess() {
      if (topic) {
        toast({
          title: capitalize(`${topic} ${lowerCase(type)}ed successfully!`),
          variant: "default",
        });
      } else {
        toast({
          title: capitalize(`${lowerCase(type)}ed successfully!`),
          variant: "default",
        });
      }
    },
  });

  const form = useFormBuilder<z.infer<TSchema>>({
    schema,
    defaultValues: removeNilKeys(defaultValues ?? {}) as any,
  });

  return (
    <Form {...form}>
      {mp(
        props,
        <form
          className="flex w-full flex-col gap-10"
          onSubmit={form.handleSubmit(run)}
        >
          {items.map(
            ({
              name,
              description,
              label,
              renderControl = defaultRenderControl,
              disabled,
            }) => (
              <FormField
                key={name}
                control={form.control}
                disabled={disabled === true}
                name={name}
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col gap-3">
                    <FormLabel className="paragraph-semibold text-dark400_light800">
                      {label && capitalCase(label)}
                      {!schema.shape[name]?.isOptional() && (
                        <span className="text-primary-500">*</span>
                      )}
                    </FormLabel>

                    <FormControl className="mt-3.5">
                      {renderControl(field as any)}
                    </FormControl>
                    <FormDescription className="body-regular text-light-500 mt-2.5">
                      {description || schema.shape[name]?.description}
                    </FormDescription>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            ),
          )}

          <div className="flex flex-wrap gap-4">
            <Button
              className={cn(submitAlign === "right" && "ml-auto", "capitalize")}
              disabled={loading}
            >
              {getSubmitText(loading, type)}
            </Button>
            {extra}
          </div>
        </form>,
      )}
    </Form>
  );
};

const getDefaultSubmitText = (loading: boolean, type: EFormBuilderType) => {
  return loading ? `${type}...` : type;
};

const defaultRenderControl = (field: ControllerRenderProps<any, string>) => (
  <Input {...field} />
);

export const useFormBuilder = <
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined,
  TSchema extends z.ZodType<any> = z.ZodType<any>,
  TFieldValues extends FieldValues = z.infer<TSchema>,
>(
  options: Omit<UseFormProps<TFieldValues, TContext>, "resolver"> & {
    schema: TSchema;
  },
) => {
  return rcUseForm({
    resolver: zodResolver(options.schema),
    ...omit(options, "schema"),
  }) as UseFormReturn<TFieldValues, TContext, TTransformedValues>;
};
