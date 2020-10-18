import styled from "styled-components";

import theme from "../../theme";

const MainContainer = styled.div`
  display: flex;
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StepLabel = styled.p`
  text-align: center;
  margin: 5px 10px;
  font-size: ${theme.fontSizes.small};
  color: ${theme.colorsPalette.gray.default};
`;

const StepBar = styled.div<{ completed: boolean }>`
  height: 3px;
  background: ${`linear-gradient(to right, ${theme.colorsPalette.blue.default} 50%, ${theme.colorsPalette.white.default} 50%)`};
  background-size: 200% 100%;
  background-position: ${({ completed }) =>
    completed ? "left bottom" : "right bottom"};
  transition: all 0.3s ease-out;
`;

export { MainContainer, StepContainer, StepLabel, StepBar };
