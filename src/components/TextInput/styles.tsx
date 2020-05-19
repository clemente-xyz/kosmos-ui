import styled, { keyframes } from "styled-components";

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
    margin-left: 15px;
  }
`;

const Label = styled.label<{ baseColor: string }>`
  color: ${({ baseColor }) => baseColor};
  position: absolute;
  pointer-events: none;
  top: 10px;
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
    bottom: 1px;
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
  font-size: ${({ theme }) => theme.fontSizes.regular};
  padding: 10px 0;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ baseColor }) => baseColor};
  background-color: transparent;
  color: ${({ baseColor }) => baseColor};
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label}, &:valid ~ ${Label} {
    top: -15px;
    color: ${({ highlightColor }) => highlightColor};
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

export { MainContainer, Input, Highlight, Bar, Label };

// https://codepen.io/chrisoncode/pen/IdGKH
