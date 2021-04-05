import { ReactNode, CSSProperties } from "react";

export interface IChipProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  type?: TComponentType;
}
