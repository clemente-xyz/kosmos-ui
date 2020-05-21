import React from "react";

import { IProps } from "./types";
import { MainContainer, StepContainer, StepLabel, StepBar } from "./styles";

/**
 * Renders a progress through a sequence of logical and numbered steps.
 * @param activeStep The active step (zero based index).
 * @param steps Index-label based object which contains all the steps that wanted to be rendered.
 * @param hideLabels Flag indication if the stepper hides or not the steps labels.
 * @param mainContainerStyles Main component container styles.
 * @param stepContainerStyles Step container styles.
 * @param stepBarStyles Step bar container styles.
 */
function Stepper({
  activeStep,
  steps,
  hideLabels,
  mainContainerStyles,
  stepContainerStyles,
  stepBarStyles,
}: IProps) {
  const orderedSteps = steps.sort((stepI, stepJ) => stepI.index - stepJ.index);

  return (
    <MainContainer style={mainContainerStyles}>
      {orderedSteps.map((step) => {
        return (
          <StepContainer key={step.index} style={stepContainerStyles}>
            {!hideLabels && <StepLabel>{step.label}</StepLabel>}

            <StepBar
              completed={step.index <= activeStep}
              style={stepBarStyles}
            />
          </StepContainer>
        );
      })}
    </MainContainer>
  );
}

export default Stepper;
