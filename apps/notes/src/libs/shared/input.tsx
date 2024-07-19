"use client";

import { IComponentBaseProps } from "@npc/shared/component-type";
import { mp } from "@npc/shared/jsx";
import { useControllableValue } from "ahooks";
import React, { ComponentProps } from "react";

interface IInputProps extends IComponentBaseProps, ComponentProps<"input"> {}
export const Input: React.FC<IInputProps> = (props) => {
  const [value, onChange] = useControllableValue<string>(props);
  return mp(
    props,
    <div className="flex items-center overflow-hidden rounded-[30px] bg-[#3B3B3B] px-10 py-3">
      <input
        {...props}
        className="flex-1 border-none bg-[#3B3B3B] text-[#ccc] caret-[#ccc] focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <svg
        className="cursor-pointer"
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_111_20)">
          <path
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            fill="#CCCCCC"
          />
        </g>
        <defs>
          <clipPath id="clip0_111_20">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>,
  );
};
