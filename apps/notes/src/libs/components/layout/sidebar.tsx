import { IComponentBaseProps, mp } from "@npcs/shared/react-helpers";
import React from "react";

export interface ISidebarProps extends IComponentBaseProps {}

export const Sidebar: React.FC<ISidebarProps> = (props) => {
  return mp(props, <div>Sidebar</div>);
};
