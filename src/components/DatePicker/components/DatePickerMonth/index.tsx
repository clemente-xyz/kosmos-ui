import React from "react";
import { useMonth } from "@datepicker-react/hooks";

import { translateMonth, translateDay } from "../../helpers";
import CarretIcon from "../../../../icons/Carret";
import DatePickerDay from "../DatePickerDay";

import { IDatePickerMonthProps } from "./types";
import {
  Button,
  DaysContainer,
  HeaderContainer,
  WeekDayLabelsContainer,
} from "./styles";

function DatePickerMonth({
  year,
  month,
  firstDayOfWeek,
  goToPreviousMonths,
  goToNextMonths,
}: IDatePickerMonthProps) {
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek,
  });

  return (
    <div>
      <HeaderContainer>
        <Button onClick={goToPreviousMonths}>
          <CarretIcon height="15px" direction="left" />
        </Button>

        <strong>{translateMonth(monthLabel)}</strong>

        <Button onClick={goToNextMonths}>
          {" "}
          <CarretIcon height="15px" style={{ paddingLeft: "2px" }} />{" "}
        </Button>
      </HeaderContainer>
      <WeekDayLabelsContainer>
        {weekdayLabels.map((dayLabel) => (
          <div style={{ textAlign: "center" }} key={dayLabel}>
            {translateDay(dayLabel)}
          </div>
        ))}
      </WeekDayLabelsContainer>
      <DaysContainer>
        {days.map((day, index) => {
          if (typeof day === "object") {
            return (
              <DatePickerDay
                date={day.date}
                key={day.date.toString()}
                dayLabel={day.dayLabel}
              />
            );
          }

          return <div key={index} />;
        })}
      </DaysContainer>
    </div>
  );
}

export default DatePickerMonth;
