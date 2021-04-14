import { ReactNode, CSSProperties } from "react";

import { TComponentType } from "../../types/components";

export interface IChipProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  type?: TComponentType;
}
