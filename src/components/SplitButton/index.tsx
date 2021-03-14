import React from "react";

import { getButtonVariantStyles } from "../Button/helpers";
import { ButtonContainer } from "../Button/styles";
import { getSplitButtonStyle } from "./helpers";
import { TSplitButtonProps } from "./types";

export default function SplitButton({
  as: Component = "button",
  side,
  style: baseStyle,
  ...props
}: TSplitButtonProps) {
  const style = getSplitButtonStyle({ side });

  const variantStyle = getButtonVariantStyles({
    variant: props.variant,
    format: props.format,
    size: props.size,
  });

  return (
    <ButtonContainer
      as={Component}
      variantStyle={variantStyle}
      style={{ ...style, ...baseStyle }}
      {...props}
    >
      {props.children}
    </ButtonContainer>
  );
}
