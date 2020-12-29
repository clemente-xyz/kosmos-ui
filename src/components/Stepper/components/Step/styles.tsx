import styled from "styled-components";

import theme from "../../../../theme";

import { TStepBarProps } from "./types";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Bar = styled.div<TStepBarProps>`
  height: 3px;
  background: ${({ color }) =>
    `linear-gradient(to right, ${
      color || theme.colorsPalette.blue.default
    } 50%, ${theme.colorsPalette.gray.light} 50%)`};
  background-size: 200% 100%;
  background-position: ${({ active, completed }) =>
    active || completed ? "left bottom" : "right bottom"};
  transition: all 0.3s ease-out;

  ${({ position }) => {
    let styles = "";

    if (position === "first") {
      styles = `
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          `;
    }

    if (position === "last") {
      styles += `
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          `;
    }

    return styles;
  }}
`;

export { MainContainer, Bar };
