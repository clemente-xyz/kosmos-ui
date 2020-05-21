import styled from "styled-components";

import theme from "../../theme";

const SliderContainer = styled.section`
  display: flex;
  margin-bottom: 30px;
`;

const TabContainer = styled.button<{ isActive: boolean }>`
  padding: 15px 10px 10px 10px;
  border: none;
  border-bottom: ${({ isActive }) =>
    isActive ? `3px solid ${theme.colorsPalette.black.default}` : "none"};
  background: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  margin-right: 25px;
  color: ${({ isActive }) =>
    isActive
      ? theme.colorsPalette.black.default
      : theme.colorsPalette.gray.default};

  transition: color 0.3s;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${theme.colorsPalette.black.default};
  }
`;

export { SliderContainer, TabContainer };
