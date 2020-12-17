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

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colorsPalette.white.default};
`;

const Loader = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:after {
    content: " ";
    display: block;
    width: 50px;
    height: 50px;
    margin: 8px;
    border-radius: 50%;
    border: 8px solid #99999936;
    border-color: #99999936 transparent #99999936 transparent;
    animation: ${animation} 1.2s linear infinite;
  }
`;

export { MainContainer, Loader };
