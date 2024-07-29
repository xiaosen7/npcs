import { IComponentBaseProps, ITag, mp } from "@/shared";
import React from "react";
import { Tag } from "./tag";

export interface ITagsProps extends IComponentBaseProps {
  tags: ITag[];
}

export const Tags: React.FC<ITagsProps> = (props) => {
  const { tags } = props;

  return mp(
    props,
    <div className="flex flex-wrap gap-2">
      {tags?.map((tag) => <Tag key={tag.id} tag={tag} />)}
    </div>,
  );
};
