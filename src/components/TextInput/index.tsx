import React from "react";

import theme from "../../theme";

import { TTextInputProps } from "./types";
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
  style,
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
}: TTextInputProps): JSX.Element {
  return (
    <MainContainer style={style && style.mainContainer}>
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={style && style.input}
        type={type || "text"}
        baseColor={baseColor || theme.colorsPalette.gray.light}
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

      <Highlight style={style && style.hightlight} />

      <Bar
        style={style && style.bar}
        highlightColor={highlightColor || theme.colorsPalette.blue.default}
      />

      <Label
        style={style && style.label}
        htmlFor={id}
        baseColor={baseColor || theme.colorsPalette.gray.default}
      >
        {label}
      </Label>

      {error && (
        <ErrorParagraph style={style && style.error}>{error}</ErrorParagraph>
      )}
    </MainContainer>
  );
}

export default TextInput;
