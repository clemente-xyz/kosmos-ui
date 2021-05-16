import React from "react";
import BaseSelect from "react-select";

import { TSelectProps } from "./types";
import { getSelectInputStyles } from "./styles";

export default function Select({ styles, ...props }: TSelectProps) {
  return <BaseSelect styles={getSelectInputStyles(styles) as any} {...props} />;
}
