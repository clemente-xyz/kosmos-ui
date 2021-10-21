import React from "react";

import { TTypographyProps } from "./types";
import { StyledTypography } from "./styles";

export default function Typography({
  children,
  variant,
  ...props
}: TTypographyProps) {
  return (
    <StyledTypography variant={variant} {...props}>
      {children}
    </StyledTypography>
  );
}
