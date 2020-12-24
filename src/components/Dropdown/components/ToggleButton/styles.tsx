import styled from "styled-components";

import theme from "../../../../theme";

const Button = styled.button<{ default?: boolean }>`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  ${(props) => {
    if (props.default) {
      return `
        display: flex;
        justify-content: center;
        align-items: center;
        height: fit-content;
        padding: 8px;
        border-radius: 3px;
        background-color: ${theme.colorsPalette.blue.lighter};

        transition: all 0.3s;

        &:hover {
          top: 1px;
          -webkit-transform: translateY(-1px);
          -ms-transform: translateY(-1px);
          transform: translateY(-1px);
        }

        &:active {
          outline: none;
          transform: scale(0.98);
        }

        &:focus {
          outline: none;
        }
      `;
    }
  }}
`;

const Dot = styled.div`
  height: 3px;
  width: 3px;
  border-radius: 50%;
  background-color: ${theme.colorsPalette.blue.default};
  margin-right: 3px;

  &:last-child {
    margin-right: 0;
  }
`;

export { Button, Dot };
