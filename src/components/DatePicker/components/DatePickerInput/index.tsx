import React from "react";

import { IDatePickerInputProps } from "./types";
import {
  MainContainer,
  Input,
  Highlight,
  Bar,
  Label,
  ErrorParagraph,
} from "./styles";
import theme from "../../../../theme";

const DatePickerInput = React.forwardRef(
  (
    {
      placeholder,
      type,
      label,
      value,
      onChange,
      onClick,
      id,
      name,
      mainContainerStyle,
      inputStyle,
      baseColor,
      highlightColor,
      onBlur,
      onCopy,
      onCut,
      onDrag,
      onDrop,
      autoComplete,
      readOnly,
      error,
    }: IDatePickerInputProps,
    ref: any
  ) => {
    return (
      <MainContainer style={mainContainerStyle} onClick={onClick} ref={ref}>
        <Input
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={inputStyle}
          type={type || "text"}
          baseColor={baseColor || theme.colorsPalette.gray.default}
          highlightColor={highlightColor || theme.colorsPalette.gray.dark}
          required
          onCopy={onCopy}
          onCut={onCut}
          onDrag={onDrag}
          onDrop={onDrop}
          autoComplete={autoComplete}
          readOnly={readOnly}
          onBlur={onBlur}
        />

        <Highlight />

        <Bar
          highlightColor={highlightColor || theme.colorsPalette.blue.default}
        />

        <Label
          htmlFor={id}
          baseColor={baseColor || theme.colorsPalette.gray.default}
        >
          {label}
        </Label>

        {error && <ErrorParagraph>{error}</ErrorParagraph>}
      </MainContainer>
    );
  }
);

export default DatePickerInput;
