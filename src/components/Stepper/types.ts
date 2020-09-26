import { ReactNode, CSSProperties } from "react";

export interface IStepperProps {
  steps: IStep[];
  activeStep: number;
  hideLabels?: boolean;
  mainContainerStyles?: CSSProperties;
  stepContainerStyles?: CSSProperties;
  stepBarStyles?: CSSProperties;
}

export interface IStep {
  index: number;
  label: string | ReactNode;
}
