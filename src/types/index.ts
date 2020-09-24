import { CSSProperties } from "react";

export type IVectorProps = {
  height?: string;
  color?: string;
  primaryColor?: string;
  secondaryColor?: string;
  style?: CSSProperties;
  className?: string;
};

export type IDirections = "up" | "down" | "left" | "right";
