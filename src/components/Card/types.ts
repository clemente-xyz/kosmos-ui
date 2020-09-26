import { CSSProperties, ReactNode } from "react";

export interface ICardProps {
  children: ReactNode;
  style?: CSSProperties;
  header?: string | ReactNode;
  className?: string;
}
