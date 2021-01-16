import styled, { keyframes } from "styled-components";
import { lighten } from "polished";

import theme from "../../theme";

function inputHighlighter(highlightColor: string) {
  return keyframes`
  from { background: ${highlightColor}; }
  to 	{ width:0; background:transparent; }
`;
}

const MainContainer = styled.div`
  position: relative;
  width: 100%;

  &:not(:first-child) {
    margin-left: 16px;
  }
`;

const Label = styled.label<{ baseColor: string }>`
  font-size: ${theme.fontSizes.regular};
  color: ${({ baseColor }) => baseColor};
  position: absolute;
  pointer-events: none;
  top: 12px;
  transition: 0.2s ease all;

  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;

const Bar = styled.span<{ highlightColor: string }>`
  position: relative;
  display: block;
  width: 100%;

  &::before,
  &::after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 0;
    position: absolute;
    background: ${({ highlightColor }) => highlightColor};
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

const Highlight = styled.span`
  position: absolute;
  height: 60%;
  width: 100%;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
`;

const Input = styled.input<{ baseColor: string; highlightColor: string }>`
  font-size: ${theme.fontSizes.regular};
  padding: 12px 0;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 2px solid ${({ baseColor }) => lighten(0.2, baseColor)};
  background-color: transparent;
  color: ${({ baseColor }) => baseColor};
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label}, &:valid ~ ${Label} {
    top: -16px;
    color: ${({ highlightColor }) => highlightColor};
    font-size: ${theme.fontSizes.small};
  }

  &:read-only ~ ${Label} {
    top: -16px;
    color: ${({ highlightColor }) => highlightColor};
    font-size: ${theme.fontSizes.small};
  }

  &:focus ~ ${Bar}::before, &:focus ~ ${Bar}::after {
    width: 50%;

    &:focus ~ ${Highlight} {
      -webkit-animation: inputHighlighter 0.3s ease;
      -moz-animation: inputHighlighter 0.3s ease;
      animation: ${({ highlightColor }) => inputHighlighter(highlightColor)}
        0.3s ease;
    }
  }
`;

const ErrorParagraph = styled.p`
  font-size: ${theme.fontSizes.regular};
  margin: 0;
  color: ${theme.colorsPalette.red.default};
  margin-top: 16px;
`;

export { MainContainer, Input, Highlight, Bar, Label, ErrorParagraph };

// https://codepen.io/chrisoncode/pen/IdGKH
