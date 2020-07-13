import React from "react";

import Loader from "../Loader";

import { getButtonStyles } from "./helpers";
import { IProps } from "./types";
import { MainContainer } from "./styles";

/**
 * Render button component.
 * @param onClick Function to trigger when button is clicked.
 * @param text Text content that will display the button.
 * @param type Button type (each type has its own style).
 * @param disabled Flag that enable/disable button clicking.
 * @param loading Flag that determines if the Loader component renders or not.
 */
function Button({
  onClick,
  text,
  type,
  format,
  size,
  style,
  disabled,
  loading,
  className,
}: IProps) {
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
    type,
    format,
    size,
  });

  return (
    <MainContainer
      style={style}
      className={className}
      onClick={onClick}
      backgroundColor={backgroundColor as string}
      fontColor={fontColor as string}
      fontSize={fontSize}
      padding={padding}
      boxShadow={boxShadow}
      backgroundColorOnHover={backgroundColorOnHover as string}
      fontColorOnHover={fontColorOnHover}
      border={border as string}
      disabled={disabled}
    >
      {loading ? <Loader /> : text}
    </MainContainer>
  );
}

export default Button;
