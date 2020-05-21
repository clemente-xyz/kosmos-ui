import styled from "styled-components";

import theme from "../../theme";

const MainContainer = styled.div`
  background-color: ${theme.colorsPalette.white.default};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 30px 50px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0),
    0 3px 5px 0px rgba(0, 0, 0, 0.03);

  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

const UpperCaseParagraph = styled.p`
  text-transform: uppercase;
  color: ${theme.colorsPalette.gray.light};
  font-weight: 700;
  margin: 0;
`;

export { MainContainer, UpperCaseParagraph };
