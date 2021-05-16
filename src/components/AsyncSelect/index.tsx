import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";

import { getSelectInputStyles } from "../Select/styles";

import { TAsyncSelectProps } from "./types";

export default function AsyncSelect({ styles, ...props }: TAsyncSelectProps) {
  return (
    <AsyncPaginate styles={getSelectInputStyles(styles) as any} {...props} />
  );
}
