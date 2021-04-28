import React from "react";
import ReactSelect from "react-select";
import { AsyncPaginate, LoadOptions } from "react-select-async-paginate";

import { selectInputStyles } from "./styles";

export type TAsyncSelectProps = Omit<ReactSelect["props"], "isLoading"> & {
  loadOptions: TAsyncSelectLoadOptions;
};

export type TAsyncSelectLoadOptions = LoadOptions<any, any>;

export default function AsyncSelect(props: TAsyncSelectProps) {
  return <AsyncPaginate styles={selectInputStyles} {...props} />;
}
