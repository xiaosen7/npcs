import { IComponentBaseProps, IQuestion, formatDate, mp } from "@/shared";
import { ImageClock } from "@/shared/assets/icons/clock";
import React from "react";

export interface IQuestionDateProps extends IComponentBaseProps {
  variant?: "default" | "simple" | "with-icon";
  question: IQuestion;
}

export const QuestionDate: React.FC<IQuestionDateProps> = (props) => {
  const { question, variant = "default" } = props;
  return mp(
    props,
    <span className="small-regular text-dark400_light700 flex flex-wrap gap-1">
      {variant === "with-icon" && (
        <ImageClock
          alt="clock"
          className="invert-colors object-contain"
          height={16}
          width={16}
        />
      )}

      <span>
        {variant !== "simple" && "• asked"} {formatDate(question.createdAt)}
      </span>
    </span>
  );
};
