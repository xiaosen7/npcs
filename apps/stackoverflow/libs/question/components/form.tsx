"use client";
import { MarkdownEditor } from "@/markdown";
import {
  EFormTopic,
  EFormType,
  FormBuilder,
  IFormComponentProps,
  IFormItems,
  ITag,
  Input,
  cn,
  mp,
} from "@/shared";
import { ITagsEditorProps, TagsEditor } from "@/tag";
import { z } from "zod";
import { QUESTION_SCHEMA } from "../constants";

export interface IQuestionFormProps<TTag extends ITag>
  extends IFormComponentProps<typeof QUESTION_SCHEMA> {
  tagsEditor?: ITagsEditorProps<TTag>;
}

const getItems = <TTag extends ITag>(
  tagsEditor?: ITagsEditorProps<TTag>,
  isEdit?: boolean
) =>
  [
    {
      label: "Title",
      name: "title",
      description:
        "Be specific and imagine you're asking a question to another person.",
      renderControl: (field) => <Input {...field} />,
    },
    {
      label: "Tags",
      name: "tags",
      description:
        "Add up to 3 tags to describe what your question is about. You need to press enter to add a tag.",
      renderControl: (field) => (
        <TagsEditor {...field} disabled={isEdit} {...tagsEditor} max={3} />
      ),
    },
    {
      label: "Explanation",
      name: "explanation",
      description:
        " Introduces the problem and expand on what you put in the title. Minimum 20 characters.",
      renderControl: (field) => (
        <MarkdownEditor {...field} className={cn("h-[300px]")} />
      ),
    },
  ] satisfies IFormItems<z.infer<typeof QUESTION_SCHEMA>>;

export const QuestionForm = <TTag extends ITag>(
  props: IQuestionFormProps<TTag>
) => {
  const { tagsEditor } = props;

  return mp(
    props,
    <FormBuilder
      items={getItems(tagsEditor, props.type === EFormType.Edit)}
      schema={QUESTION_SCHEMA}
      topic={EFormTopic.Question}
      {...props}
    />
  );
};
