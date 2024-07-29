import { IComponentBaseProps, IQuestion, ITag, mp } from "@/shared";
import { ImageChevronRight } from "@/shared/assets/icons/chevron-right";
import { Tag } from "@/tag";
import Link from "next/link";
import React from "react";

export interface IRightSidebarProps extends IComponentBaseProps {
  hotQuestions?: IQuestion[];
  popularTags?: ITag[];
  getTagQuestionCount?: (tag: ITag) => number;
}

export const RightSidebar: React.FC<IRightSidebarProps> = (props) => {
  const { hotQuestions = [], popularTags = [], getTagQuestionCount } = props;
  return mp(
    props,
    <section className="background-light900_dark200 light-border custom-scrollbar shadow-light-300 sticky right-0 top-0 flex h-full w-[350px] flex-col overflow-y-auto border-l p-6 dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              key={question.id}
              className="flex cursor-pointer items-center justify-between gap-7"
              href={`/question/${question.id}`}
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <ImageChevronRight
                alt="chevron right"
                className="invert-colors"
                height={20}
                width={20}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <Tag
              key={tag.id}
              tag={tag}
              totalQuestions={getTagQuestionCount?.(tag)}
            />
          ))}
        </div>
      </div>
    </section>,
  );
};
