import React from "react";
import BaseDatePicker, {
  ReactDatePickerProps as IBaseDatePickerProps,
} from "react-datepicker";

import DatePickerInput from "./components/DatePickerInput";

import "./styles.scss";

export default function DatePicker(props: IBaseDatePickerProps) {
  return <BaseDatePicker customInput={<DatePickerInput />} {...props} />;
}
