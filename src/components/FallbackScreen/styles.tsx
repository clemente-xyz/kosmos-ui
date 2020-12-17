import { CSSProperties } from "react";
import styled, { keyframes } from "styled-components";

import theme from "../../theme";

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const MainContainer = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colorsPalette.white.default};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loader = styled.div<{ color?: string }>`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 50px;
    height: 50px;
    margin: 8px;
    border-radius: 50%;
    border: 4px solid
      ${({ color, theme }) => color || theme.colorsPalette.blue.default};
    border-color: ${({ color, theme }) =>
      `${color || theme.colorsPalette.blue.default} transparent ${
        color || theme.colorsPalette.blue.default
      } transparent`};
    animation: ${animation} 1.2s linear infinite;
  }
`;

const Header = styled.h1`
  margin-top: 24px;
  color: ${theme.colorsPalette.gray.dark};
  font-size: ${theme.fontSizes.regularLarge};
  font-weight: ${theme.fontWeights.bolder};
`;

export { MainContainer, Loader, ContentContainer, Header };
