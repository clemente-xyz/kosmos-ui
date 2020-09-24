import { ReactNode, CSSProperties } from "react";

export interface IChipProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  type?: TChipType;
}

export type TChipType =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning";
