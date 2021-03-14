import React from "react";

import Loader from "../Loader";

import { getButtonVariantStyles } from "./helpers";
import { TButtonProps } from "./types";
import { ButtonContainer } from "./styles";

/**
 * Render button component.
 * @param variant Button type (each type has its own style).
 * @param disabled Flag that enable/disable button clicking.
 * @param loading Flag that determines if the Loader component renders or not.
 */
function Button({
  as: Component = "button",
  variant,
  format,
  size,
  disabled,
  loading,
  children,
  style,
  className,
  ...props
}: TButtonProps) {
  const variantStyle = getButtonVariantStyles({
    variant,
    format,
    size,
  });

  return (
    <ButtonContainer
      as={Component}
      disabled={disabled}
      style={style}
      className={className}
      variantStyle={variantStyle}
      {...props}
    >
      {loading ? <Loader /> : children}
    </ButtonContainer>
  );
}

export default Button;
