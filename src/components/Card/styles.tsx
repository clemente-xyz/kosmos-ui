import styled from "styled-components";

import theme from "../../theme";

const MainContainer = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colorsPalette.white.default};
  border-radius: 5px;
  padding: 32px 54px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0),
    0 3px 5px 0px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s;

  &:hover {
    top: 2px;
    -webkit-transform: translateY(-2px);
    -ms-transform: translateY(-2px);
    transform: translateY(-2px);
  }
`;

const Header = styled.h1`
  color: ${theme.colorsPalette.gray.dark};
  font-size: ${theme.fontSizes.regularLarge};
  font-weight: ${theme.fontWeights.bolder};
`;

export { MainContainer, Header };
