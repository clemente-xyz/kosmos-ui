import styled from "styled-components";

import theme from "../../theme";

export const SwitchContainer = styled.div`
  position: relative;
  width: 42px;
  height: 24px;
`;

export const SwitchLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 24px;
  border-radius: 15px;
  /* TODO: Add this color to color palette */
  background: #d8d8d8;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: ${theme.colorsPalette.white.default};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const SwitchInput = styled.input.attrs({ type: "checkbox" })<{
  baseColor?: string;
}>`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;

  &:checked + ${SwitchLabel} {
    background: ${({ baseColor }) =>
      baseColor || theme.colorsPalette.blue.default};

    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export const SwitchErrorParagraph = styled.p`
  font-size: ${theme.fontSizes.regular};
  margin: 0;
  color: ${theme.colorsPalette.red.default};
  margin-top: 15px;
`;
