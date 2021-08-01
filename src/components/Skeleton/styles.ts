import styled, { keyframes } from "styled-components";

import theme from "../../theme";

import { TSkeletonContainerProps } from "./types";

const shimmerKeyframe = keyframes`
    0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`;

export const Container = styled.div<TSkeletonContainerProps>`
  float: left;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  animation: ${shimmerKeyframe} 2s linear infinite forwards;
  background: ${theme.colorsPalette.gray.lighter};
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(8%, ${theme.colorsPalette.gray.lighter}),
    color-stop(18%, ${theme.colorsPalette.gray.light}),
    color-stop(33%, ${theme.colorsPalette.gray.lighter})
  );
  background: linear-gradient(
    to right,
    ${theme.colorsPalette.gray.lighter} 8%,
    ${theme.colorsPalette.gray.light} 18%,
    ${theme.colorsPalette.gray.lighter} 33%
  );
  background-size: 800px 100px;
  border-radius: ${({ variant }) => (variant === "circle" ? "50%" : "4px")};
`;
