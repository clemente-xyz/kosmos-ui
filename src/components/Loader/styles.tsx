import styled, { keyframes } from "styled-components";

const rotationKeyframes = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 4px }
  100% { margin-bottom: 0 }
`;

const MainContainer = styled.div`
  padding: 5px;
  display: flex;
  align-items: flex-end;
`;

const Dot = styled.div<{ delay: string; backgroundColor: string }>`
  border-radius: 50%;
  width: 8px;
  height: 8px;
  margin: 0 3px;
  animation: ${rotationKeyframes} 0.8s linear infinite;
  animation-timing-function: ease-in-out;
  ${({ delay, backgroundColor }) => `
    animation-delay: ${delay};
    background-color: ${backgroundColor};
  `}
`;

export { MainContainer, Dot };
