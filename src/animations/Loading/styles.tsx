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

const MainContainer = styled.div<{ color: string }>`
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
    border: 4px solid ${({ color }) => color};
    border-color: ${({ color }) => `${color} transparent ${color} transparent`};
    animation: ${animation} 1.2s linear infinite;
  }
`;

export { MainContainer };
