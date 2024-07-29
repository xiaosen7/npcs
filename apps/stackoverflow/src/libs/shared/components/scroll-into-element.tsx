"use client";
import { mp } from "@/shared";
import React, { useEffect } from "react";

export interface IScrollIntoHashElementProps {
  /**
   * @default window.location.hash
   */
  selector?: string;
}

export const ScrollIntoElement: React.FC<IScrollIntoHashElementProps> = (
  props,
) => {
  const { selector } = props;
  useEffect(() => {
    const selectors = selector || window.location.hash;
    const element = selectors && document.querySelector(selectors);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 1000);
    }
  }, [selector]);
  return mp(props, <></>);
};

export const ScrollIntoHashElement = () => <ScrollIntoElement />;
