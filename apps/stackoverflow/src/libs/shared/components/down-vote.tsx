"use client";
import { IComponentBaseProps, formatNumber, mp, toast } from "@/shared";
import Image from "next/image";
import React from "react";
import { imageDownvoteSrc } from "../assets/icons/downvote";
import { imageDownvotedSrc } from "../assets/icons/downvoted";

export interface IDownVoteProps extends IComponentBaseProps {
  count: number;
  voted?: boolean;
  onChange?: (vote: boolean) => void | Promise<void>;
}

export const DownVote: React.FC<IDownVoteProps> = (props) => {
  const { count, voted, onChange } = props;
  return mp(
    props,
    <div className="flex gap-1.5">
      <Image
        alt="down vote"
        className="cursor-pointer"
        height={18}
        src={voted ? imageDownvotedSrc : imageDownvoteSrc}
        width={18}
        onClick={() =>
          onChange &&
          Promise.resolve(onChange(!voted)).then(() => {
            toast({
              title: `Down vote ${voted ? "removed" : "added"}`,
            });
          })
        }
      />

      <div className="flex-center background-light700_dark400 min-w-[18px] rounded-sm p-1">
        <p className="subtle-medium text-dark400_light900">
          {formatNumber(count)}
        </p>
      </div>
    </div>,
  );
};
