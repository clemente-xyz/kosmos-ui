import { CSSProperties, ReactNode } from "react";

export type IProps = {
  children: ReactNode;
  style?: CSSProperties;
  title?: string;
  className?: string;
};
