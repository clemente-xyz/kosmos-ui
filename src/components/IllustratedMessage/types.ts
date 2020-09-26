import { ReactNode, CSSProperties } from "react";

export interface IIllustratedMessageProps {
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
        | "users"
      )
    | ReactNode;
  illustrationConfigs?: {
    style?: CSSProperties;
    className?: string;
    height?: string;
  };
  header?: string | ReactNode;
  headerStyle?: CSSProperties;
  body?: string | ReactNode;
  bodyStyle?: CSSProperties;
  mainContainerStyle?: CSSProperties;
}
