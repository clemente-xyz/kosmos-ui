import styled from "styled-components";

const MainContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.regular};
  color: ${({ theme }) => theme.colorsPalette.gray.default};
  line-height: 25px;
  padding: 15px;
`;

export { MainContainer };
