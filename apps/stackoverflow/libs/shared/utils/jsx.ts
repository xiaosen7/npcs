import React from "react";
import { ISafeAny } from "../types";
import { cn } from "./clsx";

/**
 * merge props with jsx
 * @param props
 * @param jsx
 * @returns
 */
export function mp(props: ISafeAny, jsx: React.ReactElement) {
  if (!React.isValidElement(jsx)) {
    return jsx;
  }

  const originalProps = jsx.props as ISafeAny;
  return React.cloneElement(jsx, {
    ...originalProps,
    className: cn(originalProps.className, props.className),
    style: { ...originalProps.style, ...props.style },
  });
}
