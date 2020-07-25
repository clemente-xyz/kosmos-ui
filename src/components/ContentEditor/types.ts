import { CSSProperties } from "react";

export type IProps = {
  prevContent?: string;
  onChange?: (currentValue: string) => void;
  error?: string;
  style?: CSSProperties;
};
