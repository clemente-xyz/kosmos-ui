import styled, { keyframes } from "styled-components";

function inputHighlighter(highlightColor: string) {
  return keyframes`
  from { background: ${highlightColor}; }
  to 	{ width:0; background:transparent; }
`;
}

const MainContainer = styled.div`
  position: relative;
  margin-bottom: 45px;
`;

const Label = styled.label<{ baseColor: string }>`
  color: ${({ baseColor }) => baseColor};
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
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

const Select = styled.select<{ baseColor: string; highlightColor: string }>`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ baseColor }) => baseColor};
  background-color: transparent;
  color: ${({ baseColor }) => baseColor};
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-padding-end: 20px;
  -moz-padding-end: 20px;
  -webkit-padding-start: 2px;
  -moz-padding-start: 2px;
  background-position: center right;
  background-repeat: no-repeat;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='rgb(204, 204, 204)' width='20' height='20' viewBox='0 0 20 20' aria-hidden='true' focusable='false' class='css-tj5bde-Svg'><path d='M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z'></path></svg>")
    no-repeat;
  background-size: 18px;
  background-position: calc(100% - 20px) center;
  background-repeat: no-repeat;

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label}, &:valid ~ ${Label} {
    top: -15px;
    font-size: 14px;
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

export { MainContainer, Select, Highlight, Bar, Label };

// https://codepen.io/chrisoncode/pen/IdGKH
