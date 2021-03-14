import { ReactNode, CSSProperties } from "react";
import { IVectorProps } from "types";

export type TIllustratedMessageProps = {
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
  illustrationConfigs?: TIllustratedMessageConfigs;
  header?: string | ReactNode;
  headerStyle?: CSSProperties;
  body?: string | ReactNode;
  bodyStyle?: CSSProperties;
  mainContainerStyle?: CSSProperties;
};

export type TIllustratedMessageConfigs = Pick<
  IVectorProps,
  "height" | "style" | "className"
>;
