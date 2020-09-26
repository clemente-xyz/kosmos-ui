import styled from "styled-components";

import theme from "../../theme";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 8px;
  border-radius: 16px;
  width: fit-content;
  font-size: ${theme.fontSizes.xxsmall};
  font-weight: ${theme.fontWeights.bolder};
`;

export { MainContainer };
