import { ReactNode } from "react";

import { WithStyle } from "../../types/general";

export type TSkeletonContainerProps = {
  variant: "square" | "circle";
  height: number;
  width: number;
};

export type TSkeletonProps = Partial<TSkeletonContainerProps> &
  WithStyle<{
    children?: ReactNode;
  }>;
