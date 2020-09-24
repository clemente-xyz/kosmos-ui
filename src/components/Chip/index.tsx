import React from "react";

import { getChipMainStyles } from "./helpers";
import { IChipProps } from "./types";
import { MainContainer } from "./styles";

function Chip({ children, style, className, type = "primary" }: IChipProps) {
  const mainStyles = getChipMainStyles(type);

  return (
    <MainContainer style={{ ...mainStyles, ...style }} className={className}>
      {children}
    </MainContainer>
  );
}

export default Chip;
