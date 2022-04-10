import React from "react";

import { TSwitchProps } from "./types";
import {
  SwitchContainer,
  SwitchInput,
  SwitchLabel,
  SwitchErrorParagraph,
} from "./styles";

export default function Switch({
  id,
  baseColor,
  error,
  style,
  className,
  ...props
}: TSwitchProps) {
  return (
    <SwitchContainer style={style?.root} className={className?.root}>
      <SwitchInput
        id={id}
        type="checkbox"
        baseColor={baseColor}
        style={style?.input}
        className={className?.input}
        {...props}
      />

      <SwitchLabel
        htmlFor={id}
        style={style?.label}
        className={className?.label}
      />

      {error && (
        <SwitchErrorParagraph style={style?.error} className={className?.error}>
          {error}
        </SwitchErrorParagraph>
      )}
    </SwitchContainer>
  );
}
