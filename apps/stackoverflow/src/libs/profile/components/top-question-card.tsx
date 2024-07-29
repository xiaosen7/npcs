import { QuestionCard } from "@/question";
import { IComponentBaseProps, IQuestion, ITag, IUser, mp } from "@/shared";
import React from "react";

export interface IProfileTopQuestionCardProps extends IComponentBaseProps {
  question: IQuestion;
  tags: ITag[];
  votes: number;
  user: IUser;
}

export const ProfileTopQuestionCard: React.FC<IProfileTopQuestionCardProps> = (
  props,
) => {
  const { question, tags, votes, user } = props;
  return mp(
    props,
    <QuestionCard
      key={question.id}
      creator={user}
      question={question}
      tags={tags}
      votes={votes}
    />,
  );
};
