import { ReactNode, CSSProperties } from "react";

import { TStyledComponentType } from "../../types";

export interface IChipProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  type?: TStyledComponentType;
}
