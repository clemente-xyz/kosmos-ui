import React from "react";

import { getButtonVariantStyles } from "../Button/helpers";
import { ButtonContainer } from "../Button/styles";
import { getSplitButtonStyle } from "./helpers";
import { TSplitButtonProps } from "./types";

export default function SplitButton({
  side,
  as: Component = "button",
  style: baseStyle,
  ...props
}: TSplitButtonProps) {
  const style = getSplitButtonStyle({ side });

  const variantStyles = getButtonVariantStyles({
    variant: props.variant,
    format: props.format,
    size: props.size,
  });

  return (
    <ButtonContainer
      as={Component as any}
      variantStyles={variantStyles}
      style={{ ...style, ...baseStyle }}
      {...props}
    >
      {props.children}
    </ButtonContainer>
  );
}
