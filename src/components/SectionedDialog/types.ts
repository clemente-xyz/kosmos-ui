import { ReactNode, CSSProperties } from "react";

export interface ISectionedDialogProps {
  show: boolean;
  setShow: () => void;
  header: string | ReactNode;
  sections: {
    header: string | ReactNode;
    content: string | ReactNode;
  }[];
  cardStyle?: CSSProperties;
}
