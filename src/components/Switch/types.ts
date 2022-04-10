import { CSSProperties } from "react";

export type TSwitchProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "style" | "className" | "type"
> & {
  style?: {
    root?: CSSProperties;
    input?: CSSProperties;
    label?: CSSProperties;
    error?: CSSProperties;
  };
  className?: {
    root?: string;
    input?: string;
    label?: string;
    error?: string;
  };
  baseColor?: string;
  error?: string;
};
