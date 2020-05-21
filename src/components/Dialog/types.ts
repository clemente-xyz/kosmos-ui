import { ReactNode, CSSProperties } from "react";

export type IProps = {
  isOpen: boolean;
  header: string | ReactNode;
  content: string | ReactNode;
  confirmAction?:
    | {
        message: string;
        callback: () => void;
      }
    | ReactNode;
  declineAction:
    | {
        message: string;
        callback: () => void;
      }
    | ReactNode;
  cardStyle?: CSSProperties;
};
