import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";

import { ISafeAny } from "@/shared";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

export const MARKDOWN_EDITOR_PLUGINS = [
  [codeSyntaxHighlight, { highlighter: Prism }],
  colorSyntax,
] as ISafeAny[];

export const MARKDOWN_VIEWER_PLUGINS = MARKDOWN_EDITOR_PLUGINS.slice(0, 1);
