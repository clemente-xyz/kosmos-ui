import { LoadOptions } from "react-select-async-paginate";

import { TSelectProps } from "components/Select/types";

export type TAsyncSelectLoadOptions = LoadOptions<any, any>;

export type TAsyncSelectProps = Omit<TSelectProps, "isLoading"> & {
  loadOptions: TAsyncSelectLoadOptions;
};
