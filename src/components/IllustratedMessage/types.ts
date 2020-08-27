import { ReactNode, CSSProperties } from "react";

export type IProps = {
  illustration?:
    | (
        | "creditCard"
        | "documents"
        | "doneCheck"
        | "emptyCart"
        | "emptyInbox"
        | "error"
        | "images"
        | "location"
        | "messages"
        | "noConection"
        | "noSearchResults"
        | "noTasks"
      )
    | ReactNode;
  illustrationConfigs?: {
    style?: CSSProperties;
    className?: string;
    height?: string;
  };
  header: string | ReactNode;
  headerStyle?: CSSProperties;
  body?: string | ReactNode;
  bodyStyle?: CSSProperties;
  mainContainerStyle?: CSSProperties;
};
