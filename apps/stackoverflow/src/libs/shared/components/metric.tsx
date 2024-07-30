import { isNumber } from "lodash-es";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IComponentBaseProps } from "../ui";
import { cn, formatNumber, mp } from "../utils";

export interface IMetricProps extends IComponentBaseProps {
  imgUrl: string;
  label: string;
  value: React.ReactNode;
  href?: string;
  classNames?: {
    text?: string;
  };
}

export const Metric: React.FC<IMetricProps> = (props) => {
  const { imgUrl, label, value, href, classNames } = props;
  let content = (
    <>
      <Image
        alt={label}
        className={cn(`object-contain invert-colors`, href && "rounded-full")}
        height={16}
        src={imgUrl}
        width={16}
      />
      <p className={cn("flex items-center gap-1", classNames?.text)}>
        {isNumber(value) ? formatNumber(value) : value}
        <span className={"small-regular line-clamp-1 capitalize"}>{label}</span>
      </p>
    </>
  );

  if (href) {
    content = (
      <Link className="flex-center gap-1" href={href}>
        {content}
      </Link>
    );
  }

  return mp(
    props,
    <div className="flex-center flex-wrap gap-1">{content}</div>,
  );
};
