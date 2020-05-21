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

const Card = styled(animated.div)`
  display: flex;
  width: 50vw;
  height: 60vh;
  overflow: hidden;
  border-radius: 5px;
  animation-duration: 0.75s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  /* TODO: Add this color to palette */
  background-color: ${theme.colorsPalette.white.default};
  max-height: 75vh;
`;

const SectionsContainer = styled.section`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  flex: 0.3;
  padding: 25px;
  /* TODO: Add this color to palette */
  background-color: #f1f1f1;
`;

const SectionContentContainer = styled.section`
  flex: 0.7;
  padding: 60px 50px 50px 50px;
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

const SectionName = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colorsPalette.black.default};
  margin: 0 -25px;
  padding: 15px 25px;
  cursor: pointer;
  transition: background-color 0.5s;

  background-color: ${({ isSelected }) =>
    // TODO: Define a gray color for this in colors palette
    isSelected ? "#0404040d" : "none"};

  &:hover {
    background-color: #0404040d;
  }
`;

export {
  Backdrop,
  Card,
  SectionsContainer,
  SectionContentContainer,
  CloseIconContainer,
  SectionName,
};
