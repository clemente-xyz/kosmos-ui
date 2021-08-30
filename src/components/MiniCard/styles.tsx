import styled from "styled-components";

import theme from "../../theme";

const MainContainer = styled.article<{ hasIcon: boolean }>`
  display: flex;
  align-items: ${({ hasIcon }) => (hasIcon ? "center" : "unset")};
  flex-direction: ${({ hasIcon }) => (hasIcon ? "row" : "column")};
  padding: 24px;
  background-color: ${theme.colorsPalette.white.default};
  border-radius: 8px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0),
    0 3px 5px 0px rgba(0, 0, 0, 0.03);

  @media (max-width: 600px) {
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 16px;
    align-items: center;
  }
`;

const Header = styled.h1`
  text-transform: uppercase;
  color: ${theme.colorsPalette.gray.light};
  font-size: ${theme.fontSizes.small};
  font-weight: ${theme.fontWeights.bold};
  margin: 0;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export { MainContainer, ContentContainer, Header };
