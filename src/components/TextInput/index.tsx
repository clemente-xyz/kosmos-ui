import React from "react";

import theme from "../../theme";

import { TTextInputProps } from "./types";
import {
  Container,
  InputContainer,
  Input,
  Highlight,
  Bar,
  Label,
} from "./styles";

export default function TextInput({
  id,
  label,
  variant = "standard",
  type = "text",
  adornments,
  placeholder,
  style,
  colors,
  error,
  ...inputProps
}: TTextInputProps): JSX.Element {
  const inputStyles = {
    margin: `0 ${adornments?.right ? "8px" : "0"} 0 ${
      adornments?.left ? "8px" : "0"
    }`,
    ...style?.input,
  };

  const inputPlaceholder = !label ? placeholder : "";

  return (
    <Container style={style?.root}>
      <InputContainer
        baseColor={colors?.base || theme.colorsPalette.gray.light}
        highlightColor={colors?.highlight || theme.colorsPalette.gray.dark}
        variant={variant}
        error={error}
        isLabel={!!label}
      >
        {adornments?.left}

        <Input
          id={id}
          style={inputStyles}
          baseColor={colors?.base || theme.colorsPalette.gray.light}
          highlightColor={colors?.highlight || theme.colorsPalette.gray.dark}
          variant={variant}
          placeholder={inputPlaceholder}
          type={type}
          error={error}
          required
          {...inputProps}
        />

        {adornments?.right}

        <Bar
          variant={variant}
          style={style?.bar}
          highlightColor={colors?.highlight || theme.colorsPalette.blue.default}
          error={error}
        />

        <Label
          style={style?.label}
          isLeftAdornment={!!adornments?.left}
          variant={variant}
          htmlFor={id}
          baseColor={colors?.base || theme.colorsPalette.gray.default}
          error={error}
        >
          {label}
        </Label>
      </InputContainer>

      <Highlight style={style?.highlight} />
    </Container>
  );
}
