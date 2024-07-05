import { mp } from "@/shared";
import { useTheme } from "@/theme";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { useControllableValue } from "ahooks";
import React from "react";
import "../../styles/index.css";
import { IMarkdownEditorProps } from "../types";
import { MARKDOWN_EDITOR_PLUGINS } from "./constants";

export const MarkdownEditor: React.FC<IMarkdownEditorProps> = (props) => {
  const [value, onChange] = useControllableValue<string>(props);

  const ref = React.useRef<Editor>(null);
  const { mode: theme } = useTheme();

  return mp(
    props,
    <div key={theme} className="h-[300px]">
      <Editor
        ref={ref}
        autofocus={false}
        height="100%"
        initialEditType="markdown"
        initialValue={value || "Start typing here..."}
        minHeight={"100%"}
        plugins={MARKDOWN_EDITOR_PLUGINS}
        previewStyle="tab"
        theme={theme}
        useCommandShortcut={true}
        onChange={() => {
          onChange(ref.current?.getInstance().getMarkdown().trim() ?? "");
        }}
      />
    </div>
  );
};
