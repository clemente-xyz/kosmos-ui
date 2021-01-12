import styled from "styled-components";

import theme from "../../theme";

import { TToggleButtonsStyle } from "./types";

type TToggleButtonProps = {
  isSelected: boolean;
  style?: TToggleButtonsStyle;
};

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.colorsPalette.gray.superLight};
  border-radius: 5px;
  width: fit-content;
  padding: 8px;
  transition: all 0.3s;
`;

const ToggleButton = styled.button<TToggleButtonProps>`
  padding: 8px 16px;
  background-color: ${({ isSelected, style }) =>
    isSelected
      ? (style && style.backgroundColor) || theme.colorsPalette.white.default
      : "transparent"};
  color: ${({ isSelected, style }) =>
    isSelected
      ? (style && style.backgroundColor) || theme.colorsPalette.gray.default
      : theme.colorsPalette.gray.light};
  font-weight: ${theme.fontWeights.regular};
  box-shadow: ${({ isSelected }) =>
    isSelected
      ? "0px 0px 7px 0px rgba(0, 0, 0, 0), 0 3px 5px 0px rgba(0, 0, 0, 0.03);"
      : "none"};
  border: none;
  cursor: pointer;
  outline: inherit;
  border-radius: 5px;
  transition: all 0.3s;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export { MainContainer, ToggleButton };
