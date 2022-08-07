import React from "react";

import { getStyledComponentMainStyles } from "../../utils/helpers";

import { BoxedIconContainer } from "./styles";
import { TBoxedIconProps } from "./types";

export default function BoxedIcon({
  type = "primary",
  icon,
  style,
  className,
}: TBoxedIconProps) {
  const mainStyles = getStyledComponentMainStyles(type);

  return (
    <BoxedIconContainer
      style={{ ...mainStyles, ...style }}
      className={className}
    >
      {icon}
    </BoxedIconContainer>
  );
}
