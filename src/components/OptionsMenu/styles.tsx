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
  background-color: ${theme.colorsPalette.gray.lighter};

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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  overflow-y: scroll;
  padding: 16px;
  justify-content: space-between;
  min-width: 180px;
`;

const Label = styled.div<{ hasSeparator?: boolean }>`
  padding: 10px 20px;
  margin: 0 -15px;
  cursor: default;
  border-bottom: ${({ hasSeparator }) =>
    hasSeparator ? `1px solid ${theme.colorsPalette.gray.superLight}` : "none"};

  &:hover {
    background-color: ${({ hasSeparator }) =>
      !hasSeparator ? theme.colorsPalette.gray.superLight : "none"};
  }
`;

const Dot = styled.div`
  height: 3px;
  width: 3px;
  border-radius: 50%;
  background-color: ${theme.colorsPalette.gray.light};
  margin-right: 3px;

  &:last-child {
    margin-right: 0;
  }
`;

export { DefaultButton, Dot, TriggerPropButton, MenuContainer, Label };
