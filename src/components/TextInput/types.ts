import { CSSProperties, FocusEvent } from "react";

export type TTextInputProps = {
  placeholder?: string;
  type?: string;
  label?: string;
  value?: string | number;
  onChange?: (event: any) => void;
  id?: string;
  name?: string;
  baseColor?: string;
  highlightColor?: string;
  onCopy?: () => boolean;
  onCut?: () => boolean;
  onDrag?: () => boolean;
  onDrop?: () => boolean;
  autoComplete?: string;
  onBlur?: (event: FocusEvent<any>) => void;
  readOnly?: boolean;
  error?: string;
  style?: TTextInputStyle;
};

export type TTextInputStyle = {
  mainContainer?: CSSProperties;
  input?: CSSProperties;
  bar?: CSSProperties;
  label?: CSSProperties;
  hightlight?: CSSProperties;
  error?: CSSProperties;
};
