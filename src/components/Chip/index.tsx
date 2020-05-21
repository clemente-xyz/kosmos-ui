import React, { ReactNode, CSSProperties } from "react";

import { MainContainer } from "./styles";

function Chip({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return <MainContainer style={style}>{children}</MainContainer>;
}

export default Chip;
