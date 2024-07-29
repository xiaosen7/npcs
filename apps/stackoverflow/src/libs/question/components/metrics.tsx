import { IComponentBaseProps, Metric, mp } from "@/shared";
import { imageEyeSrc } from "@/shared/assets/icons/eye";
import { imageLikeSrc } from "@/shared/assets/icons/like";
import { imageMessageSrc } from "@/shared/assets/icons/message";
import { isNumber } from "lodash-es";
import React from "react";

export interface IUIQuestionMetricsProps extends IComponentBaseProps {
  answers?: number;
  views?: number;
  votes?: number;
}

export const QuestionMetrics: React.FC<IUIQuestionMetricsProps> = (props) => {
  const { answers, views, votes } = props;
  return mp(
    props,
    <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
      {isNumber(votes) && (
        <Metric
          classNames={{
            text: "small-medium text-dark400_light800",
          }}
          imgUrl={imageLikeSrc}
          label="Votes"
          value={votes}
        />
      )}

      {isNumber(answers) && (
        <Metric
          classNames={{
            text: "small-medium text-dark400_light800",
          }}
          imgUrl={imageMessageSrc}
          label="Answers"
          value={answers}
        />
      )}

      {isNumber(views) && (
        <Metric
          classNames={{
            text: "small-medium text-dark400_light800",
          }}
          imgUrl={imageEyeSrc}
          label="Views"
          value={views}
        />
      )}
    </div>,
  );
};
