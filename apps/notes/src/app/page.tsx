import { IComponentBaseProps, mp } from "@npc/shared/react-helpers";
import React from "react";

export interface IPageProps extends IComponentBaseProps {}

const Page: React.FC<IPageProps> = (props) => {
  return mp(
    props,
    <div>
      <span>Click a note on the left to view something!~ 🥺</span>
    </div>
  );
};

export default Page;
