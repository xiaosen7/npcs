"use client";

import { IComponentBaseProps, mp } from "@/shared";
import React from "react";
import { NavButtons } from "./nav-buttons";
import { NavLinks } from "./nav-links";

export interface ILeftSidebarProps extends IComponentBaseProps {}

export const LeftSidebar: React.FC<ILeftSidebarProps> = (props) => {
  return mp(
    props,
    <section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-full w-fit flex-col justify-between overflow-y-auto border-r p-6 shadow-light-300 dark:shadow-none lg:w-[266px]">
      <NavLinks />
      <NavButtons />
    </section>
  );
};
