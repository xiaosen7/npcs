"use client";
import { IComponentBaseProps, mp } from "@/shared";
import { imageStarFilledSrc } from "@/shared/assets/icons/star-filled";
import { imageStarRedSrc } from "@/shared/assets/icons/star-red";
import Image from "next/image";
import React from "react";

export interface ICollectProps extends IComponentBaseProps {
  collected?: boolean;
  onChange?: (collected: boolean) => void;
}

export const Collect: React.FC<ICollectProps> = (props) => {
  const { collected, onChange } = props;
  return mp(
    props,
    <Image
      alt="star"
      className="cursor-pointer"
      height={18}
      src={collected ? imageStarFilledSrc : imageStarRedSrc}
      width={18}
      onClick={() => onChange?.(!collected)}
    />
  );
};
