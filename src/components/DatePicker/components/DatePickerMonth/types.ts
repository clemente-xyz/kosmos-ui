import { FirstDayOfWeek } from "@datepicker-react/hooks";

export type IProps = {
  year: number;
  month: number;
  firstDayOfWeek: FirstDayOfWeek;
  goToPreviousMonths: () => void;
  goToNextMonths: () => void;
};
