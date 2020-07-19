import styled from "styled-components";
import { animated } from "react-spring";

import theme from "../../theme";

const MainContainer = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
  background-color: ${theme.colorsPalette.gray.superLight};
  border-radius: 5px;
  position: relative;
`;

const CurrentColorContainer = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  height: 100%;
  width: 30%;
  border-top-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 5px;
`;

const PickerButton = styled.button`
  display: flex;
  justify-content: center;
  margin-right: 8px;
  border: none;
  background-color: ${theme.colorsPalette.gray.default};
  border-radius: 50%;
  height: 24px;
  width: 24px;
  color: ${theme.colorsPalette.white.default};
  transition: 0.3s background-color;

  &:hover {
    background-color: ${theme.colorsPalette.black.default};
  }

  &:focus {
    outline: 0;
    background-color: ${theme.colorsPalette.black.default};
  }
`;

const PickerButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const PickerDialog = styled(animated.article)`
  position: relative;
  animation-duration: 0.75s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 300;
  padding: 50px 10px 10px 10px;
  overflow: hidden;
  background-color: ${theme.colorsPalette.white.default};
  max-height: 75vh;
`;

const PickerDialogBackdrop = styled(animated.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 200;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const PickerDialogTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 40px;
  width: 100%;
  text-align: center;
`;

const PickerSaturationContainer = styled.div`
  height: 300px;
  width: 300px;
  position: relative;
  float: left;
  border-radius: 5px;
  overflow: hidden;
`;

const PickerHueContainer = styled.div`
  height: 30px;
  width: 100%;
  position: relative;
  float: left;
  margin-top: 10px;
  border-radius: 5px;
  overflow: hidden;
`;

const CloseIconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  transition: 0.3s all;

  &:hover {
    background-color: ${theme.colorsPalette.gray.superLight};
    top: 13px;
    transform: scale(0.98);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export {
  CurrentColorContainer,
  MainContainer,
  PickerButton,
  PickerButtonContainer,
  PickerDialog,
  PickerDialogBackdrop,
  PickerDialogTitle,
  PickerSaturationContainer,
  PickerHueContainer,
  CloseIconContainer,
};
