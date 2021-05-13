import { CSSProperties } from "react";

export type TVectorProps = {
  height?: string;
  color?: string;
  colors?: Partial<TVectorColors>;
  style?: CSSProperties;
  className?: string;
};

export type TVectorColors = { dark: string; default: string; light: string };
