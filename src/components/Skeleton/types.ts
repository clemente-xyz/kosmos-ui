import { ReactNode } from "react";

import { WithStyle } from "components/ContentEditor/types";

export type TSkeletonContainerProps = {
  variant: "square" | "circle";
  height: number;
  width: number;
};

export type TSkeletonProps = Partial<TSkeletonContainerProps> &
  WithStyle<{
    children?: ReactNode;
  }>;
