import { GitLog, IComponentBaseProps, mp } from "@/shared";
import React from "react";

import { IGlobalSearchProps } from "./global-search";
import { LeftSidebar } from "./left-sidebar";
import { Navbar } from "./navbar";
import { IRightSidebarProps, RightSidebar } from "./right-sidebar";

export interface IDefaultLayoutProps
  extends IComponentBaseProps,
    IRightSidebarProps {
  children?: React.ReactNode;
  globalSearch: IGlobalSearchProps;
}

export const DefaultLayout: React.FC<IDefaultLayoutProps> = (props) => {
  const { getTagQuestionCount, hotQuestions, popularTags, globalSearch } =
    props;
  return mp(
    props,
    <div className="relative">
      <div className="background-light850_dark100 flex">
        <LeftSidebar className="sticky left-0 top-0 h-screen overflow-auto pt-36 max-sm:hidden" />

        <section className="mx-auto flex max-w-5xl flex-1 flex-col overflow-auto break-all p-6 pt-36 max-md:pb-14 sm:px-14">
          {props.children}
          <GitLog className="mt-6" />
        </section>

        <RightSidebar
          className="sticky left-0 top-0 h-screen overflow-auto pt-36 max-xl:hidden"
          getTagQuestionCount={getTagQuestionCount}
          hotQuestions={hotQuestions}
          popularTags={popularTags}
        />
      </div>

      {/* Toaster */}
      <Navbar className="fixed left-0 top-0 z-10" globalSearch={globalSearch} />
    </div>,
  );
};
