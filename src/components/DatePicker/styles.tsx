import styled, { keyframes } from "styled-components";

import theme from "../../theme";

function inputHighlighter(highlightColor: string) {
  return keyframes`
  from { background: ${highlightColor}; }
  to 	{ width:0; background:transparent; }
`;
}

const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 10px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  max-width: 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  right: 5px;
  top: 2px;
  border-radius: 50%;
  transition: all 0.3s;

  &:hover {
    background-color: ${theme.colorsPalette.gray.superLight};
    -webkit-transform: translateY(-1px);
    -ms-transform: translateY(-1px);
    transform: translateY(-1px);
  }
`;

const InputsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  margin-bottom: 45px;
`;

const CalendarContainer = styled.div`
  position: absolute;
  display: block;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  top: 50px;
  height: 270px;
  overflow-y: scroll;
  z-index: 3;
`;

const Label = styled.label<{ baseColor: string }>`
  color: ${({ baseColor }) => baseColor};
  font-size: 18px;
  font-weight: normal;
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

// const DateValue = styled.p<{ baseColor: string; highlightColor: string }>`

const DateValue = styled.input`
  font-size: 18px;
  padding: 10px 0;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${theme.colorsPalette.gray.default};
  background-color: transparent;
  color: ${theme.colorsPalette.gray.default};

  &:focus::-webkit-datetime-edit {
    color: ${theme.colorsPalette.gray.default} !important;
  }

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label}, &:valid ~ ${Label} {
    top: -15px;
    font-size: 14px;
    color: ${theme.colorsPalette.black.default};
  }

  &:focus ~ ${Bar}::before, &:focus ~ ${Bar}::after {
    width: 50%;

    &:focus ~ ${Highlight} {
      -webkit-animation: inputHighlighter 0.3s ease;
      -moz-animation: inputHighlighter 0.3s ease;
      animation: ${inputHighlighter(theme.colorsPalette.black.default)} 0.3s
        ease;
    }
  }
`;

export {
  Button,
  ButtonContainer,
  InputsContainer,
  MainContainer,
  CalendarContainer,
  DateValue,
  Highlight,
  Bar,
  Label,
};
