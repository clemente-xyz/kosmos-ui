import { CSSProperties } from "react";

export type TFallbackScreenProps = {
  type: "loading" | "error";
  style?: {
    mainContainer?: CSSProperties;
    loadingComponent?: CSSProperties;
    errorComponent?: CSSProperties;
  };
  className?: string;
};
