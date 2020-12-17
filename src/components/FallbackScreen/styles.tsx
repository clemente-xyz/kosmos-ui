import styled from "styled-components";

import theme from "../../theme";

const MainContainer = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colorsPalette.white.default};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Header = styled.h1`
  margin-top: 24px;
  color: ${theme.colorsPalette.gray.dark};
  font-size: ${theme.fontSizes.regularLarge};
  font-weight: ${theme.fontWeights.bolder};
`;

export { MainContainer, ContentContainer, Header };
