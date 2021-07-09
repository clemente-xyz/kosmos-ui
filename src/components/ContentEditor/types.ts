import { ReactNode, CSSProperties } from "react";
import { EditorState } from "draft-js";

import {
  ContentEditorControlButton,
  ContentEditorControls,
  ContentEditorHeader,
  ContentEditorSubmit,
} from "./components";

export type WithStyle<T = {}> = T & {
  style?: CSSProperties;
  className?: string;
};

export type TContentEditor = JSX.Element & {
  ControlButton: typeof ContentEditorControlButton;
  Controls: typeof ContentEditorControls;
  Submit: typeof ContentEditorSubmit;
  Header: typeof ContentEditorHeader;
};

export type TContentEditorProps = {
  value?: string;
  onChange?: (currentValue: string, options?: any) => void;
  onImagesChange?: (content: any) => void;
  placeholder?: string;
  readOnly?: boolean;
  children?: ReactNode;
  style?: { root?: CSSProperties; editor?: CSSProperties };
  className?: { root?: string; editor?: string };
};

export type TContentEditorContext = {
  editorState: EditorState;
  onToggleBlockType(_: any): void;
  onToggleInlineStyle(_: any): void;
  onToggleLinkStyle(_: any): void;
  handleReset(): void;
};
