import { ReactNode } from "react";

export type IProps = {
  triggerButton?: ReactNode;
  options: {
    label: string | ReactNode;
    callback?: () => void;
    hasSeparator?: boolean;
  }[];
  position?: "left" | "right";
};
