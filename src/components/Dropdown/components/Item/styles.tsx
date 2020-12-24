import styled from "styled-components";

import theme from "../../../../theme";

const MainContainer = styled.div<{ separator?: boolean; default?: boolean }>`
  padding: 12px 20px;
  cursor: pointer;
  border-bottom: ${({ separator }) =>
    separator ? `1px solid ${theme.colorsPalette.gray.superLight}` : "none"};
  color: ${(props) =>
    props.default ? theme.colorsPalette.gray.default : "inherit"};
  border-radius: 5px;
  font-size: 14px;

  ${(props) => {
    if (props.default) {
      return `
      display: flex;
      align-items: center;        
      &:hover {
        background-color: ${
          !props.separator ? theme.colorsPalette.blue.lighter : "none"
        };
        color: ${theme.colorsPalette.blue.default};
      }
    `;
    }
  }}
`;

export { MainContainer };
