import React from "react";
import BaseSelect from "react-select/creatable";

import { selectInputStyles } from "../Select/styles";
import { TSelectProps } from "../Select/types";

export default function CreatableSelect({ styles, ...props }: TSelectProps) {
  return <BaseSelect styles={{ ...selectInputStyles, ...styles }} {...props} />;
}
