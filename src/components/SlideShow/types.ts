import { CSSProperties } from "react";

export interface ISlideShowProps {
  slides: string[];
  style?: {
    root?: CSSProperties;
    slide?: CSSProperties;
    buttons?: CSSProperties;
  };
  className?: string;
}
