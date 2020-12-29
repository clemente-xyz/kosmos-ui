import { CSSProperties, ReactElement } from 'react';

import { TStepProps } from './components/Step/types';
import Step from './components/Step';
import StepLabel from './components/Label';

export type TStepper = JSX.Element & {
  Step: typeof Step;
  Label: typeof StepLabel;
};

export type TStepperProps = {
  activeStep: number;
  style?: TStepperStyleProps;
  children: ReactElement<TStepProps>[];
};

export type TStepperStyleProps = {
  color?: string;
  bar?: CSSProperties;
  active?: CSSProperties;
  completed?: CSSProperties;
};
