import styled from "styled-components";

import theme from "../../theme";

const MainContainer = styled.article`
  background-color: ${theme.colorsPalette.white.default};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 30px 50px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0),
    0 3px 5px 0px rgba(0, 0, 0, 0.03);
`;

const Header = styled.h1`
  font-size: ${theme.fontSizes.regularLarge};
  font-weight: ${theme.fontWeights.regular};
`;

export { MainContainer, Header };
