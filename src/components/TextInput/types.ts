import { CSSProperties, FocusEvent } from "react";

export interface ITextInputProps {
  placeholder?: string;
  type?: string;
  label?: string;
  value?: string | number;
  onChange?: (event: any) => void;
  id?: string;
  name?: string;
  mainContainerStyle?: CSSProperties;
  inputStyle?: CSSProperties;
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
}
