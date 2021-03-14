import styled from "styled-components";

import theme from "../../theme";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  height: 100%;
  width: 100%;
`;

export const Paragraph = styled.p`
  margin: 0;
  z-index: 2;
`;

export const SelectContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  border-width: 2px;
  border-radius: 4px;
  border-color: ${theme.colorsPalette.gray.lighter};
  border-style: dashed;
  background-color: transparent;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

export const FileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const FilesContainer = styled.aside`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  width: 100%;
`;
