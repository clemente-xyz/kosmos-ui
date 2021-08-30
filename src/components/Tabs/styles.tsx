import styled from "styled-components";

import theme from "../../theme";

const TabsSliderContainer = styled.section`
  display: flex;
  margin-bottom: 16px;
`;

const TabContainer = styled.button<{ active: boolean }>`
  padding: 8px;
  border: none;
  border-bottom: ${({ active }) =>
    active ? `3px solid ${theme.colorsPalette.blue.default}` : "none"};
  background: none;
  color: inherit;
  font: inherit;
  font-size: ${theme.fontSizes.regular};
  cursor: pointer;
  outline: inherit;
  margin-right: 24px;
  color: ${({ active }) =>
    active ? theme.colorsPalette.blue.default : theme.colorsPalette.gray.dark};
  transition: color 0.3s;
  height: fit-content;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${theme.colorsPalette.blue.default};
  }
`;

export { TabsSliderContainer, TabContainer };
