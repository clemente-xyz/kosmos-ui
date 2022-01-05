import React from "react";

import theme from "../../theme";

import { TCheckboxProps } from "./types";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxIcon,
} from "./styles";

export default function Checkbox({
  checked,
  color = theme.colorsPalette.blue.default,
  className,
  style,
  ...props
}: TCheckboxProps) {
  return (
    <CheckboxContainer className={className} style={style?.root}>
      <HiddenCheckbox checked={checked} {...props} />

      <StyledCheckbox
        checked={checked}
        disabled={props.disabled}
        color={color}
        style={style?.checkbox}
      >
        <CheckboxIcon viewBox="0 0 24 24" style={style?.icon}>
          <polyline points="20 6 9 17 4 12" />
        </CheckboxIcon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
}
