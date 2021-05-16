import React from "react";
import BaseSelect from "react-select";

import { TSelectProps } from "./types";
import { getSelectInputStyles } from "./styles";

export default function Select({ style, ...props }: TSelectProps) {
  return <BaseSelect styles={getSelectInputStyles(style) as any} {...props} />;
}
