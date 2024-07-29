import { IComponentBaseProps } from "@/shared";

export interface IMarkdownEditorProps extends IComponentBaseProps {
  /**
   * The default value of the editor
   */
  value?: string;
  onChange?: (value: string) => void;
}

export interface IMarkdownViewerProps extends IComponentBaseProps {
  value: string;
}
