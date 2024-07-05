import React from "react";
import { IMarkdownEditorProps } from "../types";

export const MarkdownEditor: React.FC<IMarkdownEditorProps> = (props) => {
  const { value } = props;
  return <textarea defaultValue={value} />;
};
