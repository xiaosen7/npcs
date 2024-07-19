import { IComponentBaseProps, mp } from "@npc/shared/react-helpers";
import React from "react";

export interface IDefaultLayoutProps extends IComponentBaseProps {
  children?: React.ReactNode;
}

export const DefaultLayout: React.FC<IDefaultLayoutProps> = (props) => {
  return mp(props, <div>{props.children}</div>);
};
