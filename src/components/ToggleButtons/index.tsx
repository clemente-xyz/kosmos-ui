import React from "react";

import { TProps } from "./types";
import { MainContainer, ToggleButton } from "./styles";

function ToggleButtons({
  options,
  value,
  setValue,
  exclusive = false,
  style,
}: TProps) {
  function handleOptionButtonClick(
    option: string,
    event: React.MouseEvent<HTMLElement>
  ) {
    let newValue: string | Array<string> = option;

    if (!exclusive && typeof value !== "string") {
      newValue = [...(value || []), newValue];
    }

    setValue(newValue, event);
  }

  return (
    <MainContainer style={style && style.mainContainer}>
      {options.map((option, index) => {
        return (
          <ToggleButton
            key={index}
            isSelected={
              !!(
                value &&
                (typeof value === "string"
                  ? value === option.value
                  : value.find(
                      (selectedOption) => selectedOption === option.value
                    ))
              )
            }
            onClick={(event) => handleOptionButtonClick(option.value, event)}
            style={style && style.buttons}
          >
            {option.label}
          </ToggleButton>
        );
      })}
    </MainContainer>
  );
}

export default ToggleButtons;
