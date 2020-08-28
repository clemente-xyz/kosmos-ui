import styled from "styled-components";

import theme from "../../theme";

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  font-size: ${theme.fontSizes.regularLarge};
  color: ${theme.colorsPalette.black.default};
  margin-bottom: 8px;
`;

const Paragraph = styled.p`
  font-size: ${theme.fontSizes.regular};
  line-height: 24px;
  margin: 0;
  font-size: 14px;
  color: ${theme.colorsPalette.gray.default};
  max-width: 396px;
  text-align: center;
`;

export { MainContainer, Header, Paragraph };
