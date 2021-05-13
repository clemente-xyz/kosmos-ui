import { ReactNode, CSSProperties } from "react";

import { TVectorProps } from "../../types/vectors";

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
  TVectorProps,
  "height" | "style" | "className"
>;
