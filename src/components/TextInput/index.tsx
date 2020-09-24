import React from "react";

import theme from "../../theme";

import { IProps } from "./types";
import {
  MainContainer,
  Input,
  Highlight,
  Bar,
  Label,
  ErrorParagraph,
} from "./styles";

function TextInput({
  placeholder,
  type,
  label,
  value,
  onChange,
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
}: IProps) {
  return (
    <MainContainer style={mainContainerStyle}>
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={inputStyle}
        type={type || "text"}
        baseColor={baseColor || theme.colorsPalette.gray.default}
        highlightColor={highlightColor || theme.colorsPalette.gray.default}
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

export default TextInput;
