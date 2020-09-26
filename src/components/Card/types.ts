import { CSSProperties, ReactNode } from "react";

export interface ICardProps {
  children: ReactNode;
  style?: CSSProperties;
  title?: string;
  className?: string;
}
