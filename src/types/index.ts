import { CSSProperties } from "react";

export interface IVectorProps {
  height?: string;
  color?: string;
  primaryColor?: string;
  secondaryColor?: string;
  style?: CSSProperties;
  className?: string;
}

export type TDirection = "up" | "down" | "left" | "right";

export type TStyledComponentType =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning";

export type TStyledComponentFormat = "fill" | "outline";

export type TStyledComponentSize = "small" | "regular" | "large";
