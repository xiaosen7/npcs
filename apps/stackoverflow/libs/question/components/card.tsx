import { IComponentBaseProps, IQuestion, ITag, IUser, mp } from "@/shared";
import { Tags } from "@/tag";
import { UserAvatar } from "@/user";
import React from "react";
import { QuestionDate } from "./date";
import { QuestionMetrics } from "./metrics";
import { QuestionTitle } from "./title";

export interface IQuestionCardProps extends IComponentBaseProps {
  question: IQuestion;
  tags: ITag[];
  creator: IUser;
  votes: number;
}

export const QuestionCard: React.FC<IQuestionCardProps> = (props) => {
  const { question, tags, creator, votes } = props;

  return mp(
    props,
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <QuestionDate
        className={"sm:hidden"}
        question={question}
        variant="simple"
      />

      <QuestionTitle className="line-clamp-1" level={3} question={question} />

      <Tags className="mt-3.5" tags={tags} />

      <div className="flex-between mt-6 w-full flex-wrap items-center gap-3 ">
        <UserAvatar
          extra={
            <QuestionDate className={"max-sm:hidden"} question={question} />
          }
          user={creator}
        />

        <QuestionMetrics answers={0} views={question.views} votes={votes} />
      </div>
    </div>
  );
};
