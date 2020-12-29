import React from 'react';

import Step from './components/Step';
import StepLabel from './components/Label';

import { TStepper, TStepperProps } from './types';
import { MainContainer } from './styles';

function Stepper(props: TStepperProps): TStepper {
  const stepsCount = React.Children.count(props.children);

  const steps = React.Children.map(props.children, (step, index) => {
    return React.cloneElement(step, {
      index,
      active: index === props.activeStep,
      completed: index < props.activeStep,
      stepsCount,
      style: props.style,
    });
  });

  return ((<MainContainer>{steps}</MainContainer>) as unknown) as TStepper;
}

Stepper.Step = Step;
Stepper.Label = StepLabel;

export default Stepper;
