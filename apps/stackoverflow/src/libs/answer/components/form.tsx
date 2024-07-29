"use client";

import { MarkdownEditor } from "@/markdown";
import {
  EFormTopic,
  FormBuilder,
  IFormComponentProps,
  IFormItem,
  mp,
} from "@/shared";
import React from "react";
import { z } from "zod";
import { ANSWER_SCHEMA } from "../constants";

export interface IAnswerFormProps
  extends IFormComponentProps<typeof ANSWER_SCHEMA> {}

const items: IFormItem<z.infer<typeof ANSWER_SCHEMA>>[] = [
  {
    name: "content",
    renderControl(field) {
      return <MarkdownEditor {...field} />;
    },
  },
];

export const AnswerForm: React.FC<IAnswerFormProps> = (props) => {
  return mp(
    props,
    <FormBuilder
      items={items}
      schema={ANSWER_SCHEMA}
      submitAlign="right"
      topic={EFormTopic.Answer}
      {...props}
    />,
  );
};
