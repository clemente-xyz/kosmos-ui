import React from 'react';

import { TStepLabelProps } from './types';
import { MainContainer } from './styles';

function StepLabel(props: TStepLabelProps) {
  return (
    <MainContainer active={props.active} color={props.color}>
      {props.children}
    </MainContainer>
  );
}

export default StepLabel;
