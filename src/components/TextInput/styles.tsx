import styled, { keyframes } from "styled-components";
import { lighten } from "polished";

import theme from "../../theme";
import { TTextInputVariant } from "./types";

function inputHighlighter(highlightColor: string) {
  return keyframes`
  from { background: ${highlightColor}; }
  to 	{ width:0; background:transparent; }
`;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;
  width: 100%;
  /* min-height: 88px; */
`;

export const Label = styled.label<{
  baseColor: string;
  isLeftAdornment: boolean;
  variant: TTextInputVariant;
  error?: boolean;
}>`
  font-size: ${theme.fontSizes.regular};
  color: ${({ baseColor, error }) =>
    error ? theme.colorsPalette.red.default : baseColor};
  position: absolute;
  pointer-events: none;
  top: 12px;
  left: ${({ isLeftAdornment, variant }) =>
    isLeftAdornment ? (variant === "standard" ? "24px" : "36px") : "0"};
  transition: 0.2s ease all;

  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;

export const Bar = styled.span<{
  highlightColor: string;
  variant: TTextInputVariant;
  error?: boolean;
}>`
  display: ${({ variant }) => (variant === "filled" ? "none" : "block")};
  position: absolute;
  bottom: -2px;
  width: 100%;

  &::before,
  &::after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 0;
    position: absolute;
    background: ${({ highlightColor, error }) =>
      error ? theme.colorsPalette.red.default : highlightColor};
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  &::before {
    left: 50%;
  }

  &::after {
    right: 50%;
  }
`;

export const Highlight = styled.span`
  position: absolute;
  height: 60%;
  width: 100%;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
`;

export const InputContainer = styled.div<{
  baseColor: string;
  highlightColor: string;
  variant: TTextInputVariant;
  error?: boolean;
  isLabel: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: ${({ variant, isLabel }) =>
    !isLabel ? 0 : variant === "filled" ? "20px" : "16px"};
  font-size: ${theme.fontSizes.regular};
  padding: 12px ${({ variant }) => (variant === "filled" ? "12px" : "0")};
  border: ${({ variant, baseColor, error }) =>
    variant === "filled"
      ? `1px solid ${lighten(
          0.26,
          error ? theme.colorsPalette.red.default : baseColor
        )}`
      : "unset"};
  border-bottom: ${({ variant, baseColor, error }) =>
    variant === "filled" && !error
      ? "unset"
      : `${variant === "filled" ? "1px" : "2px"} solid ${
          error ? theme.colorsPalette.red.default : lighten(0.2, baseColor)
        }`};
  background-color: ${({ variant, baseColor }) =>
    variant === "filled" ? lighten(0.26, baseColor) : "transparent"};
  color: ${({ baseColor, error }) =>
    error ? theme.colorsPalette.red.default : baseColor};
  border-radius: ${({ variant }) => (variant === "filled" ? "4px" : "0")};
  transition: 0.2s ease all;

  ${({ variant, baseColor }) =>
    variant === "filled" &&
    `&:hover{ background-color: ${lighten(0.24, baseColor)} }`}
`;

export const Input = styled.input<{
  baseColor: string;
  highlightColor: string;
  variant: TTextInputVariant;
  error?: boolean;
}>`
  font-size: ${theme.fontSizes.regular};
  display: block;
  border: none;
  background-color: transparent;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 0.2s ease all;
  color: ${({ baseColor, error }) =>
    error ? theme.colorsPalette.red.default : baseColor};
  width: 100%;

  ::placeholder {
    color: ${({ baseColor, error }) =>
      lighten(0.17, error ? theme.colorsPalette.red.default : baseColor)};
  }

  &:focus {
    outline: none;
  }

  &:read-only ~ ${Label} {
    top: ${({ variant }) => (variant === "filled" ? "-20px" : "-16px")};
    color: ${({ highlightColor }) => highlightColor};
    font-size: ${theme.fontSizes.small};
  }

  &:focus ~ ${Label}, &:valid ~ ${Label} {
    top: ${({ variant }) => (variant === "filled" ? "-20px" : "-16px")};
    left: 0;
    color: ${({ highlightColor, error }) =>
      error ? theme.colorsPalette.red.default : highlightColor};
    font-size: ${theme.fontSizes.small};
  }

  &:focus ~ ${Bar}::before, &:focus ~ ${Bar}::after {
    width: 50%;

    &:focus ~ ${Highlight} {
      -webkit-animation: inputHighlighter 0.3s ease;
      -moz-animation: inputHighlighter 0.3s ease;
      animation: ${({ highlightColor, error }) =>
          inputHighlighter(
            error ? theme.colorsPalette.red.default : highlightColor
          )}
        0.3s ease;
    }
  }
`;

// https://codepen.io/chrisoncode/pen/IdGKH
