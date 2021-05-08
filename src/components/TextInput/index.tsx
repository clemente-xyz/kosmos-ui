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
  ErrorParagraph,
} from "./styles";

export default function TextInput({
  id,
  label,
  variant = "standard",
  type = "text",
  adornments,
  style,
  colors,
  error,
  ...inputProps
}: TTextInputProps): JSX.Element {
  return (
    <Container style={style?.root}>
      <InputContainer
        baseColor={colors?.base || theme.colorsPalette.gray.light}
        highlightColor={colors?.highlight || theme.colorsPalette.gray.dark}
        variant={variant}
      >
        {adornments?.left}

        <Input
          id={id}
          style={{
            margin: `0 ${adornments?.right ? "8px" : "0"} 0 ${
              adornments?.left ? "8px" : "0"
            }`,
            ...style?.input,
          }}
          baseColor={colors?.base || theme.colorsPalette.gray.light}
          highlightColor={colors?.highlight || theme.colorsPalette.gray.dark}
          variant={variant}
          {...inputProps}
        />

        {adornments?.right}

        <Bar
          variant={variant}
          style={style?.bar}
          highlightColor={colors?.highlight || theme.colorsPalette.blue.default}
        />
      </InputContainer>
      <Highlight style={style?.hightlight} />
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
