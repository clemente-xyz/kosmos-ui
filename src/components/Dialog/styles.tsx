import styled from "styled-components";
import { animated } from "react-spring";

import theme from "../../theme";

const Backdrop = styled(animated.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 200;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;

const Card = styled(animated.article)`
  position: relative;
  animation-duration: 0.75s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 25vw;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  padding: 30px 50px;
  background-color: ${theme.colorsPalette.white.default};
  max-height: 75vh;
`;

const Header = styled.h1`
  font-size: ${theme.fontSizes.regularLarge};
  font-weight: ${theme.fontWeights.regular};
`;

const Paragraph = styled.p`
  font-size: ${theme.fontSizes.regular};
  margin: 0;
  color: ${theme.colorsPalette.gray.default};
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  width: 100%;
`;

const ContentContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
`;

const CloseIconContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  padding: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  transition: 0.3s all;

  &:hover {
    background-color: ${theme.colorsPalette.gray.superLight};
    top: 23px;
    transform: scale(0.98);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export {
  Backdrop,
  Card,
  Header,
  Paragraph,
  ContentContainer,
  ButtonsContainer,
  CloseIconContainer,
};
