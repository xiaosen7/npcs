"use client";

import log from "@/shared/assets/git.log?raw";
import React from "react";
import { IComponentBaseProps } from "../types";
import { mp } from "../utils";

export interface IGitLogProps extends IComponentBaseProps {}

export const GitLog: React.FC<IGitLogProps> = (props) => {
  return mp(props, <div className="text-light400_light500 text-sm">{log}</div>);
};
