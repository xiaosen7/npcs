import { Badge, IComponentBaseProps, ITag, Linkable, mp } from "@/shared";
import React from "react";

export interface ITagProps extends IComponentBaseProps {
  totalQuestions?: number;
  tag: ITag;
  /**
   * @default true
   */
  linkable?: boolean;
  extra?: React.ReactNode;
}
export const Tag = (props: ITagProps) => {
  const { tag, totalQuestions, linkable = true, extra } = props;
  return mp(
    props,
    <Linkable href={linkable ? `/tags/${tag.id}` : undefined}>
      <div className="flex justify-between gap-2">
        <Badge className="text-light400_light500 justify-center gap-1 background-light800_dark300">
          <span className="whitespace-nowrap">{tag.name}</span> {extra}
        </Badge>

        {totalQuestions && (
          <p className="small-medium text-dark500_light700">{totalQuestions}</p>
        )}
      </div>
    </Linkable>
  );
};
