import { ReloadIcon } from "@radix-ui/react-icons";
import React from "react";

export interface ILoadingProps {}

export const Loading: React.FC<ILoadingProps> = () => {
  return <ReloadIcon className="size-4 animate-spin" />;
};
