import React from "react";

import { getStyledComponentMainStyles } from "../../utils/helpers";

import { IChipProps } from "./types";
import { MainContainer } from "./styles";

export default function Chip({
  children,
  style,
  className,
  type = "primary",
}: IChipProps) {
  const mainStyles = getStyledComponentMainStyles(type);

  return (
    <MainContainer style={{ ...mainStyles, ...style }} className={className}>
      {children}
    </MainContainer>
  );
}
