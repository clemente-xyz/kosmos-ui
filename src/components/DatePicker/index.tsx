import React from 'react';
import BaseDatePicker, {
  ReactDatePickerProps as IBaseDatePickerProps,
} from 'react-datepicker';

import DatePickerInput from './components/DatePickerInput';

import './styles.scss';

function DatePicker(props: IBaseDatePickerProps) {
  return <BaseDatePicker customInput={<DatePickerInput />} {...props} />;
}

export default DatePicker;
