import styled from "styled-components";

import Card from "../Card";

import { TDataGridCol } from "./types";

export const DataGridContainer = styled.aside`
  display: flex;
  flex-direction: column;
`;

export const DataGridHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0 24px;
`;

export const DataGridCol = styled.div<Pick<TDataGridCol, "width">>`
  padding: 16px 0;

  ${({ width }) => {
    if (!width) return "flex: 1;";
    return `width: ${width}px;`;
  }}
`;

export const DataGridRow = styled(Card)`
  display: flex;
  flex-direction: row;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const DataGridCell = styled.div<Pick<TDataGridCol, "width">>`
  flex-direction: row;

  ${({ width }) => {
    if (!width) return "flex: 1;";
    return `width: ${width}px;`;
  }}
`;
