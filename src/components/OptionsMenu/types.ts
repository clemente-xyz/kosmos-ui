import { ReactNode, CSSProperties } from "react";

export interface IOptionsMenuProps {
  triggerButton?: ReactNode;
  options: {
    label: string | ReactNode;
    callback?: () => void;
    hasSeparator?: boolean;
  }[];
  placement?:
    | "top-start"
    | "top"
    | "top-end"
    | "right-start"
    | "right"
    | "right-end"
    | "bottom-end"
    | "bottom"
    | "bottom-start"
    | "left-end"
    | "left"
    | "left-start";
  menuStyle?: CSSProperties;
}
