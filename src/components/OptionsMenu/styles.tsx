import styled from "styled-components";
import { animated } from "react-spring";

import theme from "../../theme";

const DefaultButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  padding: 8px;
  border-radius: 3px;
  background-color: ${theme.colorsPalette.blue.lighter};

  transition: all 0.3s;

  &:hover {
    top: 1px;
    -webkit-transform: translateY(-1px);
    -ms-transform: translateY(-1px);
    transform: translateY(-1px);
  }

  &:active {
    outline: none;
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
  }
`;

const TriggerPropButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const MenuContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 0px 7px 20px rgba(0, 0, 0, 0),
    0 3px 5px 5px rgba(0, 0, 0, 0.03);
  border-radius: 5px;
  overflow-y: scroll;
  padding: 16px;
  justify-content: space-between;
  min-width: 180px;
`;

const Label = styled.div<{ styled: boolean; hasSeparator?: boolean }>`
  padding: 12px 20px;
  cursor: default;
  border-bottom: ${({ hasSeparator }) =>
    hasSeparator ? `1px solid ${theme.colorsPalette.gray.superLight}` : "none"};
  color: ${({ styled }) =>
    !styled ? theme.colorsPalette.gray.default : "inherit"};
  border-radius: 5px;
  font-size: 14px;

  ${({ styled, hasSeparator }) => {
    if (styled) {
      return `
        &:hover {
          background-color: ${
            !hasSeparator ? theme.colorsPalette.blue.lighter : "none"
          };
          color: ${theme.colorsPalette.blue.default};
        }
      `;
    }
  }}
`;

const Dot = styled.div`
  height: 3px;
  width: 3px;
  border-radius: 50%;
  background-color: ${theme.colorsPalette.blue.default};
  margin-right: 3px;

  &:last-child {
    margin-right: 0;
  }
`;

export { DefaultButton, Dot, TriggerPropButton, MenuContainer, Label };
