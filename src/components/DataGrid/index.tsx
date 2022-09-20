import React from "react";

import Typography from "../Typography";

import { TDataGridProps } from "./types";
import {
  DataGridCol,
  DataGridContainer,
  DataGridHeader,
  DataGridCell,
  DataGridRow,
} from "./styles";

export default function DataGrid<T extends string | number = string>({
  columns,
  rows,
}: TDataGridProps<T>) {
  const sortedColumns = columns.sort((colI, colJ) => colI.index - colJ.index);
  const sortedColumnsKeys = sortedColumns.map((col) => col._id);

  return (
    <DataGridContainer>
      <DataGridHeader>
        {sortedColumns.map((column) => (
          <DataGridCol key={column._id} width={column.width}>
            {typeof column.label === "string" ? (
              <Typography as="b" variant="paragraph3">
                {column.label}
              </Typography>
            ) : (
              column.label
            )}
          </DataGridCol>
        ))}
      </DataGridHeader>

      {rows.map((row, index) => {
        const rowColumns = Object.entries(row) as [T, string | number][];

        const sortedRowColumns = sortedColumnsKeys.map((sortedColKey) =>
          rowColumns.find((row) => row[0] === sortedColKey)
        ) as [T, string | number][];

        return (
          <DataGridRow key={index}>
            {sortedRowColumns.map(([rowColumnKey, rowColumnValue], index) => {
              const width = columns.find(
                (column) => column._id === rowColumnKey
              )?.width;

              return (
                <DataGridCell key={index} width={width}>
                  {typeof rowColumnValue === "string" ||
                  typeof rowColumnValue === "number" ? (
                    <Typography as="p" variant="paragraph3">
                      {rowColumnValue}
                    </Typography>
                  ) : (
                    rowColumnValue
                  )}
                </DataGridCell>
              );
            })}
          </DataGridRow>
        );
      })}
    </DataGridContainer>
  );
}
