import { ReloadIcon } from "@radix-ui/react-icons";
import React from "react";

export interface ILoadingProps {}

export const Loading: React.FC<ILoadingProps> = () => {
  return <ReloadIcon className="h-4 w-4 animate-spin" />;
};
