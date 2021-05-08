import React from "react";

import theme from "../../theme";
import { TTextInputProps } from "./types";
import {
  Container,
  Input,
  Highlight,
  Bar,
  Label,
  ErrorParagraph,
} from "./styles";

export default function TextInput({
  id,
  label,
  variant = "standard",
  type = "text",
  style,
  colors,
  error,
  ...inputProps
}: TTextInputProps): JSX.Element {
  return (
    <Container style={style?.root}>
      <Input
        id={id}
        style={style?.input}
        baseColor={colors?.base || theme.colorsPalette.gray.light}
        highlightColor={colors?.highlight || theme.colorsPalette.gray.dark}
        variant={variant}
        {...inputProps}
      />

      <Highlight style={style?.hightlight} />

      <Bar
        variant={variant}
        style={style?.bar}
        highlightColor={colors?.highlight || theme.colorsPalette.blue.default}
      />

      <Label
        style={style?.label}
        htmlFor={id}
        baseColor={colors?.base || theme.colorsPalette.gray.default}
      >
        {label}
      </Label>
      {error && <ErrorParagraph style={style?.error}>{error}</ErrorParagraph>}
    </Container>
  );
}
