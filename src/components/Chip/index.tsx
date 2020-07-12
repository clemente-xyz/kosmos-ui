import React, { ReactNode, CSSProperties } from "react";

import { MainContainer } from "./styles";

function Chip({
  children,
  style,
  className,
}: {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <MainContainer className={className} style={style}>
      {children}
    </MainContainer>
  );
}

export default Chip;
