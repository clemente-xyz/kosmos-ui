import React from 'react';

import { TStepProps, TStepPosition } from './types';
import { MainContainer, Bar } from './styles';

function Step(props: TStepProps) {
  const label =
    props.children &&
    React.Children.map(props.children, (child) => {
      return React.cloneElement(child, {
        active: props.active,
        color: props.style && props.style.color,
      });
    });

  let position: TStepPosition;

  if (props.index === 0) position = 'first';
  else if (props.index === (props.stepsCount || 0) - 1) position = 'last';

  return (
    <MainContainer style={props.style} className={props.className}>
      <Bar
        active={props.active}
        completed={props.completed}
        position={position}
        color={props.style && props.style.color}
        style={props.style && props.style.bar}
      />

      {label}
    </MainContainer>
  );
}

export default Step;
