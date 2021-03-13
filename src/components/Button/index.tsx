import React from "react";

import Loader from "../Loader";

import { getButtonContainer } from "./helpers";
import { TButtonProps } from "./types";

/**
 * Render button component.
 * @param variant Button type (each type has its own style).
 * @param disabled Flag that enable/disable button clicking.
 * @param loading Flag that determines if the Loader component renders or not.
 */
function Button({
  as = "button",
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
  const Container = getButtonContainer({
    as,
    variant,
    format,
    size,
  });

  return (
    <Container
      disabled={disabled}
      style={style}
      className={className}
      {...props}
    >
      {loading ? <Loader /> : children}
    </Container>
  );
}

export default Button;
