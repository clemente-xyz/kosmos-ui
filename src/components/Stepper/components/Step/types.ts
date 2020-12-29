import { ReactElement } from 'react';

import { TStepperStyleProps } from '../../types';
import { TStepLabelProps } from '../Label/types';

export type TStepProps = {
  children?: ReactElement<TStepLabelProps>;
  index?: number;
  active?: boolean;
  completed?: boolean;
  stepsCount?: number;
  style?: TStepperStyleProps;
  className?: string;
};

export type TStepBarProps = {
  position: TStepPosition;
  active?: boolean;
  completed?: boolean;
  color?: string;
};

export type TStepPosition = 'first' | 'last' | undefined;
