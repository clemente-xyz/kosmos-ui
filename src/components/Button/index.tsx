import React from "react";

import Loader from "../Loader";

import { getButtonStyles } from "./helpers";
import { TButtonProps } from "./types";
import { MainContainer } from "./styles";

/**
 * Render button component.
 * @param variant Button type (each type has its own style).
 * @param disabled Flag that enable/disable button clicking.
 * @param loading Flag that determines if the Loader component renders or not.
 */
function Button(props: TButtonProps) {
  const {
    variant,
    format,
    size,
    disabled,
    loading,
    children,
    style,
    className,
    ...restProps
  } = props;

  const {
    backgroundColor,
    fontColor,
    boxShadow,
    backgroundColorOnHover,
    fontColorOnHover,
    border,
    fontSize,
    padding,
  } = getButtonStyles({
    variant,
    format,
    size,
  });

  return (
    <MainContainer
      backgroundColor={backgroundColor as string}
      fontColor={fontColor as string}
      fontSize={fontSize}
      padding={padding}
      boxShadow={boxShadow}
      backgroundColorOnHover={backgroundColorOnHover as string}
      fontColorOnHover={fontColorOnHover}
      border={border as string}
      disabled={disabled}
      style={style}
      className={className}
      {...restProps}
    >
      {loading ? <Loader /> : children}
    </MainContainer>
  );
}

export default Button;
