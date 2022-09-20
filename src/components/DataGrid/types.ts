import { ReactNode } from "react";

export type TDataGridProps<T extends string | number = string> = {
  columns: TDataGridCol<T>[];
  rows: TDataGridRow<T>[];
};

export type TDataGridCol<T extends string | number = string> = {
  _id: T;
  index: number;
  label?: ReactNode;
  width?: number;
};

export type TDataGridRow<T extends string | number = string> = Record<
  T,
  string | number | ReactNode
>;
