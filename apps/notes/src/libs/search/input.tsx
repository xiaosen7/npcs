"use client";

import { IconClose } from "@/assets/icon/close";
import { IComponentBaseProps } from "@npc/shared/component-type";
import { mp } from "@npc/shared/jsx";
import { useControllableValue } from "ahooks";
import React, { ComponentProps } from "react";

interface ISearchInputProps
  extends IComponentBaseProps,
    ComponentProps<"input"> {}

export const SearchInput: React.FC<ISearchInputProps> = (props) => {
  const [value, onChange] = useControllableValue<string>(props);
  return mp(
    props,
    <div className="bg-secondary flex items-center overflow-hidden rounded-2xl px-10 py-3">
      <input
        {...props}
        className="bg-secondary text-secondary placeholder:text-secondary flex-1 border-none text-lg focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <IconClose
        alt="clear"
        hidden={!value}
        size="xl"
        onClick={() => onChange("")}
      />
    </div>,
  );
};
