import React, { useState } from "react";
import { useDatepicker, START_DATE } from "@datepicker-react/hooks";

import CalendarIcon from "../../icons/Calendar";
import theme from "../../theme";
import DatePickerMonth from "./components/DatePickerMonth";
import DatePickerInput from "./components/DatePickerInput";
import DatepickerContext from "./context";

import { IDatepickerProps } from "./types";
import {
  Button,
  ButtonContainer,
  MainContainer,
  CalendarContainer,
  InputsContainer,
} from "./styles";

function Datepicker({
  placeholder,
  ids,
  names,
  baseColor,
  highlightColor,
  onBlur,
  autoComplete,
  labels,
  onChanges,
  values,
  mainContainerStyle,
}: IDatepickerProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [state, setState] = useState({
    focusedInput: START_DATE,
  });

  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonths,
    goToNextMonths,
  } = useDatepicker({
    //@ts-ignore
    startDate: values.startDate,
    //@ts-ignore
    endDate: values.endDate,
    focusedInput: state.focusedInput as any,
    onDatesChange: handleDateChange,
    numberOfMonths: 1,
  });

  function handleDateChange(data: any) {
    if (!data.focusedInput) {
      setState({ ...data, focusedInput: START_DATE });
      //@ts-ignore
      onChanges[0](data.startDate);
      //@ts-ignore
      onChanges[1](data.endDate);
    } else {
      setState(data);
      //@ts-ignore
      onChanges[0](data.startDate);
      //@ts-ignore
      onChanges[1](data.endDate);
    }
  }

  const dateFormat = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const startDate =
    //@ts-ignore
    values &&
    values.startDate &&
    //@ts-ignore
    values.startDate.toLocaleDateString("es-ES", dateFormat);
  const endDate =
    //@ts-ignore
    values &&
    values.endDate &&
    //@ts-ignore
    values.endDate.toLocaleDateString("es-ES", dateFormat);

  return (
    <DatepickerContext.Provider
      value={{
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover,
      }}
    >
      <MainContainer style={mainContainerStyle}>
        <InputsContainer>
          <DatePickerInput
            label={labels[0]}
            value={startDate || ""}
            onChange={onChanges[0]}
            placeholder={placeholder}
            id={ids && ids[0]}
            name={names && names[0]}
            baseColor={baseColor}
            highlightColor={highlightColor}
            onBlur={onBlur}
            autoComplete={autoComplete}
          />

          <DatePickerInput
            label={labels[1]}
            value={endDate || ""}
            onChange={onChanges[1]}
            placeholder={placeholder}
            id={ids && ids[1]}
            name={names && names[1]}
            baseColor={baseColor}
            highlightColor={highlightColor}
            onBlur={onBlur}
            autoComplete={autoComplete}
          />
        </InputsContainer>

        <ButtonContainer>
          <Button onClick={() => setShowCalendar(!showCalendar)}>
            <CalendarIcon
              height="25px"
              color={baseColor || theme.colorsPalette.black.default}
            />
          </Button>
        </ButtonContainer>

        {showCalendar && (
          <CalendarContainer>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${activeMonths.length}, 300px)`,
                gridGap: "0 64px",
              }}
            >
              {activeMonths.map((month) => (
                <DatePickerMonth
                  key={`${month.year}-${month.month}`}
                  year={month.year}
                  month={month.month}
                  firstDayOfWeek={firstDayOfWeek}
                  goToPreviousMonths={goToPreviousMonths}
                  goToNextMonths={goToNextMonths}
                />
              ))}
            </div>
          </CalendarContainer>
        )}
      </MainContainer>
    </DatepickerContext.Provider>
  );
}

export default Datepicker;
