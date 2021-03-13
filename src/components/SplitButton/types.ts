import { ReactNode } from "react";

import { TButtonProps } from "../Button/types";

export type TSplitButtonProps = Omit<TButtonProps, "as"> & {
  side: TSplitButtonSide;
  as?: "button" | "div" | ReactNode;
};

export type TSplitButtonSide = "left" | "right" | "middle";
