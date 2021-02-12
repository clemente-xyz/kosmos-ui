import styled from "styled-components";

import theme from "../../../../theme";

import { TCarouselArrowDirection } from "./types";

export const Icon = styled.i<{ direction: TCarouselArrowDirection }>`
  border: solid ${theme.colorsPalette.gray.darker};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;
  height: 4px;
  width: 4px;
  cursor: pointer;
  transition: 0.3s opacity;

  &:hover {
    opacity: 0.4;
  }
  transform: ${({ direction }) =>
    direction === "left" ? "rotate(135deg)" : "rotate(-45deg)"};
  ${({ direction }) =>
    direction === "left" ? "margin-left: 1em;" : "margin-right: 1em;"}
`;
