import { FirstDayOfWeek } from "@datepicker-react/hooks";

export interface IDatePickerMonthProps {
  year: number;
  month: number;
  firstDayOfWeek: FirstDayOfWeek;
  goToPreviousMonths: () => void;
  goToNextMonths: () => void;
}
