import { ReactNode, CSSProperties } from "react";

export type IProps = {
  steps: IStep[];
  activeStep: number;
  hideLabels?: boolean;
  mainContainerStyles?: CSSProperties;
  stepContainerStyles?: CSSProperties;
  stepBarStyles?: CSSProperties;
};

export type IStep = {
  index: number;
  label: string | ReactNode;
};
