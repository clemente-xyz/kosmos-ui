import styled, { keyframes } from "styled-components";

import theme from "../../theme";

const moveKeyFrame = keyframes`
  0%   { transform: scale(1)   translate(10px, -30px); }
  38%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
  40%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
  78%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
  80%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
  100% { transform: scale(1)   translate(10px, -20px); }
`;

const MainContainer = styled.div<{ color?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  fill: ${({ color }) => color || theme.colorsPalette.blue.default};
  width: 50vmax;
  animation: ${moveKeyFrame} 10s ease-in-out infinite;
  transform-origin: 30% 30%;
`;

export { MainContainer };
