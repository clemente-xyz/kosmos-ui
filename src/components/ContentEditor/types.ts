import { CSSProperties } from "react";

export interface IContentEditorProps {
  prevContent?: string;
  onChange?: (currentValue: string) => void;
  error?: string;
  style?: CSSProperties;
  handlePastedFiles?: any;
  onImagesChange?: (content: any) => void;
}
