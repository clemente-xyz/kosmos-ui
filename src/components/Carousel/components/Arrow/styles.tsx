import styled from "styled-components";

import theme from "../../../../theme";

import { TCarouselArrowDirection } from "./types";

export const CarouselArrowIcon = styled.i<{
  direction: TCarouselArrowDirection;
}>`
  border: solid ${theme.colorsPalette.white.default};
  border-width: 0 2px 2px 0;
  display: inline-block;
  height: 8px;
  width: 8px;
  cursor: pointer;
  transition: 0.3s opacity;
  transform: ${({ direction }) =>
    direction === "left" ? "rotate(135deg)" : "rotate(-45deg)"};

  &:hover {
    opacity: 0.4;
  }
`;

export const CarouselArrowContainer = styled.a<{
  direction: TCarouselArrowDirection;
}>`
  padding: 12px;
  border-radius: 50%;
  background-color: ${theme.colorsPalette.black.light};
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ direction }) =>
    direction === "left" ? "margin-left: 0.4em;" : "margin-right: 0.4em;"}
`;
