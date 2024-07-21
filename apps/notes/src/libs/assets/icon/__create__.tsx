/* eslint-disable jsx-a11y/alt-text */

import { cn, mp } from "@npc/shared/react-helpers";
import Image, { ImageProps } from "next/image";
import React from "react";

export type IIconProps = Omit<ImageProps, "src" | "width" | "height"> & {
  size?: keyof typeof iconSizes;
};

const iconSizes = {
  default: 20,
  xxl: 28,
  xl: 24,
  sm: 14,
};

export const createIconComponent = (displayName: string, src: string) => {
  const Icon: React.FC<IIconProps> = ({ size = "default", ...props }) => {
    const width = iconSizes[iconSizes[size] ? size : "default"];
    return mp(
      props,
      <Image
        height={width}
        width={width}
        {...props}
        className={cn(props.onClick && "cursor-pointer", "select-none")}
        src={src}
      />,
    );
  };

  Icon.displayName = displayName;

  return Icon;
};
