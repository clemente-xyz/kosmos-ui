import styled from "styled-components";

import theme from "../../../../theme";

export const MainContainer = styled.li<{ active: boolean }>`
  cursor: pointer;
  height: 8px;
  width: 8px;
  background-color: ${theme.colorsPalette.gray.darker};
  border-radius: 50%;
  display: inline-block;
  margin: 0 2px;
  transition: 0.3s opacity;

  opacity: ${({ active }) => (active ? "0.4" : "1")};
`;
