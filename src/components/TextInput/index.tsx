import React from "react";

import colors from "../../colors";

import { IProps } from "./types";
import { MainContainer, Input, Highlight, Bar, Label } from "./styles";

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
        baseColor={baseColor || colors.gray.default}
        highlightColor={highlightColor || colors.black.default}
        required
        onCopy={onCopy}
        onCut={onCut}
        onDrag={onDrag}
        onDrop={onDrop}
        autoComplete={autoComplete}
        onBlur={onBlur}
      />

      <Highlight />

      <Bar highlightColor={highlightColor || colors.black.default} />

      <Label htmlFor={id} baseColor={baseColor || colors.gray.default}>
        {label}
      </Label>

      {error && (
        <p style={{ color: colors.red.default, marginTop: 15 }}>{error}</p>
      )}
    </MainContainer>
  );
}

export default TextInput;
