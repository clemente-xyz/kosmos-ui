import { CSSProperties, ReactElement } from "react";

export type TDraggableItemProps = {
  _id: string;
  index: number;
  className?: string;
  style?: CSSProperties;
  children: ReactElement;
  as?: "aside" | "div" | "section";
};
