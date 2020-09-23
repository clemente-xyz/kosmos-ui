import styled from "styled-components";

import theme from "../../theme";

const TabsSliderContainer = styled.section`
  display: flex;
  margin-bottom: 32px;
`;

const TabContainer = styled.button<{ isActive: boolean }>`
  padding: 16px 8px;
  border: none;
  border-bottom: ${({ isActive }) =>
    isActive ? `2px solid ${theme.colorsPalette.blue.default}` : "none"};
  background: none;
  color: inherit;
  font: inherit;
  font-size: ${theme.fontSizes.regular};
  cursor: pointer;
  outline: inherit;
  margin-right: 24px;
  color: ${({ isActive }) =>
    isActive
      ? theme.colorsPalette.blue.default
      : theme.colorsPalette.gray.dark};

  transition: color 0.3s;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${theme.colorsPalette.blue.default};
  }
`;

export { TabsSliderContainer, TabContainer };
