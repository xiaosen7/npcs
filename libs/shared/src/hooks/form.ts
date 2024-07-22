"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { omit } from "lodash-es";
import {
  FieldValues,
  UseFormProps,
  UseFormReturn,
  useForm as rcUseForm,
} from "react-hook-form";
import { z } from "zod";

export const useForm = <
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
