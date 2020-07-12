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
    <MainContainer style={style} className={className}>
      {children}
    </MainContainer>
  );
}

export default Chip;
