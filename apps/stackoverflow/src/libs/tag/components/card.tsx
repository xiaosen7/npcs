import { IComponentBaseProps, ITag, Linkable, mp } from "@/shared";
import { isNumber, isString } from "lodash-es";
import React from "react";

export interface ITagCardProps extends IComponentBaseProps {
  tag: ITag;
  totalQuestions?: number;
  /**
   * @default true
   */
  linkable?: boolean;
}

export const TagCard: React.FC<ITagCardProps> = (props) => {
  const { tag, totalQuestions, linkable = true } = props;
  return mp(
    props,
    <Linkable href={`/tags/${tag.id}`} linkable={linkable}>
      <article className="shadow-light100_darknone background-light900_dark200 light-border flex w-full flex-col rounded-2xl border px-8 py-10 sm:w-[260px]">
        <div className="background-light800_dark400 w-fit rounded-sm px-5 py-1.5">
          <p className="paragraph-semibold text-dark300_light900">{tag.name}</p>
        </div>

        {isString(tag.description) && (
          <p className="small-regular text-dark500_light700 mt-4 line-clamp-3">
            {tag.description}
          </p>
        )}

        {isNumber(totalQuestions) && (
          <p className="small-medium text-dark400_light500 mt-3.5">
            <span className="body-semibold primary-text-gradient mr-2.5">
              {totalQuestions}+
            </span>
            Questions
          </p>
        )}
      </article>
    </Linkable>,
  );
};
