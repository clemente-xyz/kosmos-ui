import styled from "styled-components";
import { lighten } from "polished";

import theme from "../../theme";

import { TStyledCheckboxProps } from "./types";

export const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
`;

export const CheckboxIcon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<TStyledCheckboxProps>`
  display: inline-block;
  cursor: ${({ disabled }) => (disabled ? "unset" : "pointer")};
  width: 16px;
  height: 16px;
  background: ${({ checked, color }) => (checked ? color : "transparent")};
  border: 2px solid
    ${({ checked, disabled, color }) =>
      disabled
        ? lighten(0.05, theme.colorsPalette.gray.lighter)
        : checked
        ? color
        : theme.colorsPalette.gray.lighter};
  border-radius: 4px;
  transition: all 150ms;

  ${CheckboxIcon} {
    visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
  }
`;
