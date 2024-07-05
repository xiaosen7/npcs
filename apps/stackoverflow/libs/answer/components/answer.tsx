"use client";
import { MarkdownViewer } from "@/markdown";
import {
  Button,
  DownVote,
  EFormType,
  EditAndDelete,
  IAnswer,
  IComponentBaseProps,
  IDownVoteProps,
  IUpVoteProps,
  IUser,
  UpVote,
  formatDate,
  mp,
} from "@/shared";
import { UserAvatar } from "@/user";
import { useRequest } from "ahooks";
import React, { useState } from "react";
import { AnswerForm, IAnswerFormProps } from "./form";

export interface IAnswerProps extends IComponentBaseProps {
  answer: IAnswer;
  author: IUser;
  upVote?: IUpVoteProps;
  downVote?: IDownVoteProps;
  editable?: boolean;
  isEditState?: boolean;
  onAnswerSave?: IAnswerFormProps["onSubmit"];
  onDelete?: () => void | Promise<void>;
}

export const Answer: React.FC<IAnswerProps> = (props) => {
  const { author, upVote, downVote, editable, onAnswerSave, answer } = props;
  const [isEditState, setIsEditState] = useState(editable && props.isEditState);

  const { runAsync: onSubmitSave, loading } = useRequest(
    ((values) => {
      return Promise.resolve(onAnswerSave?.(values)).then(() =>
        setIsEditState(false)
      );
    }) satisfies IAnswerFormProps["onSubmit"],
    { manual: true }
  );

  return mp(
    props,
    <article className="light-border border-b py-10" id={answer.id}>
      <div className="mb-8 flex flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
        <UserAvatar
          extra={
            <p className="small-regular text-light400_light500 ml-0.5 mt-0.5 line-clamp-1">
              <span className="max-sm:hidden">• answered </span>
              {formatDate(answer.createdAt)}
            </p>
          }
          user={author}
        />

        <div className="flex gap-5">
          {upVote && <UpVote {...upVote} />}
          {downVote && <DownVote {...downVote} />}
        </div>
      </div>

      {!isEditState && <MarkdownViewer value={answer.content} />}
      {isEditState && (
        <AnswerForm
          defaultValues={answer}
          extra={
            <Button
              disabled={loading}
              variant={"secondary"}
              onClick={() => setIsEditState(false)}
            >
              Cancel
            </Button>
          }
          getSubmitText={(loading) => (loading ? "Saving..." : "Save")}
          type={EFormType.Edit}
          onSubmit={onSubmitSave}
        />
      )}

      {editable && !isEditState && (
        <EditAndDelete
          className="justify-end"
          onDelete={() => props.onDelete?.()}
          onEdit={() => setIsEditState(!isEditState)}
        />
      )}
    </article>
  );
};
