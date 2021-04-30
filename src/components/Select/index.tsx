import React from "react";
import BaseSelect from "react-select";

import { TSelectProps } from "./types";
import { selectInputStyles } from "./styles";

export default function Select({ styles, ...props }: TSelectProps) {
  return <BaseSelect styles={{ ...selectInputStyles, ...styles }} {...props} />;
}
