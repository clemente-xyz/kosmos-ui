import styled from "styled-components";
import { animated } from "react-spring";

import theme from "../../theme";

export const DialogBackdrop = styled(animated.div)`
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

export const DialogContainer = styled(animated.article)`
  position: fixed;
  padding: 24px;
  animation-duration: 0.75s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 25vw;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  background-color: ${theme.colorsPalette.white.default};
  max-height: 75vh;
`;

export const DialogBaseHeader = styled.header<{ childrenCount: number }>`
  display: flex;
  align-items: center;
  justify-content: ${({ childrenCount }) =>
    childrenCount > 1 ? "space-between" : "flex-end"};
  width: 100%;
  margin-bottom: 16px;
`;

export const DialogBaseCloseButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;

  display: flex;
  justify-content: center;
  transition: 0.3s all;
  padding: 10px;
  border-radius: 50%;
  background-color: ${theme.colorsPalette.gray.superLight};

  &:hover {
    /* TODO: Add this color to theme. */
    background-color: #dfe3e6;
    transform: scale(0.98);
  }

  &:active {
    transform: scale(0.98);
  }
`;
