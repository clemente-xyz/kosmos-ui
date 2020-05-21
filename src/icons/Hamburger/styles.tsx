import styled from "styled-components";

import theme from "../../theme";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Line = styled.div`
  width: 20px;
  height: 3px;
  background-color: ${theme.colorsPalette.black.default};
  margin-bottom: 3px;
  transition: 0.2s;

  &:last-child {
    margin-bottom: 0;
  }

  ${MainContainer}:hover & {
    background-color: ${theme.colorsPalette.gray.light};
  }
`;

export { MainContainer, Line };
