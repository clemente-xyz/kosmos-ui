import { ReactNode, CSSProperties, SetStateAction, Dispatch } from "react";

export type IProps = {
  show: boolean;
  setShow: () => void;
  header: string | ReactNode;
  sections: {
    header: string | ReactNode;
    content: string | ReactNode;
  }[];
  cardStyle?: CSSProperties;
};
