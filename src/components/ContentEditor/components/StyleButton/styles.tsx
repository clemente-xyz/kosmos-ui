import styled from "styled-components";

import theme from "../../../../theme";

const MainContainer = styled.span<{ isActive: boolean }>`
  color: ${({ isActive }) =>
    isActive
      ? theme.colorsPalette.blue.default
      : theme.colorsPalette.gray.default};
  cursor: pointer;
  margin-right: 16px;
  padding: 2px 0;
  display: inline-block;
`;

export { MainContainer };
