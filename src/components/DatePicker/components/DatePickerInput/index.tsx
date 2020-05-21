import React, { CSSProperties, FocusEvent } from "react";

import { validateDateFormat } from "../../../../utils/helpers";
import theme from "../../../../theme";

import { MainContainer, Input, Highlight, Bar, Label } from "./styles";

type IProps = {
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: (event: any) => void;
  id?: string;
  name?: string;
  inputStyle?: CSSProperties;
  baseColor?: string;
  highlightColor?: string;
  autoComplete?: string;
  onBlur?: (event: FocusEvent<any>) => void;
};

function DatePickerInput({
  placeholder,
  label,
  value,
  onChange,
  id,
  name,
  baseColor,
  highlightColor,
  onBlur,
  autoComplete,
}: IProps) {
  return (
    <MainContainer>
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={validateDateFormat(value) ? onChange : () => {}}
        type="text"
        baseColor={baseColor || theme.colorsPalette.gray.default}
        highlightColor={highlightColor || theme.colorsPalette.black.default}
        required
        autoComplete={autoComplete}
        onBlur={onBlur}
      />

      <Highlight />

      <Bar
        highlightColor={highlightColor || theme.colorsPalette.black.default}
      />

      <Label
        htmlFor={id}
        baseColor={baseColor || theme.colorsPalette.gray.default}
      >
        {label}
      </Label>
    </MainContainer>
  );
}

export default DatePickerInput;
