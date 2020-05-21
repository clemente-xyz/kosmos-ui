import { CSSProperties } from "react";

export type IProps = {
  style?: CSSProperties;
  error?: string;
  placeholder?: string;
  onChange?: (currentValue: string) => void;
};
