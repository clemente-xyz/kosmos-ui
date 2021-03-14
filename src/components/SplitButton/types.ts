import { TButtonProps } from "../Button/types";

export type TSplitButtonProps = TButtonProps & {
  side: TSplitButtonSide;
};

export type TSplitButtonSide = "left" | "right" | "middle";
