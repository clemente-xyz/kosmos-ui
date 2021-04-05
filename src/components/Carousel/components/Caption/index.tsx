import React, { ReactNode, CSSProperties } from "react";
import styled from "styled-components";

import { TPosition } from "../../../../types/vectors";

const MainContainer = styled.aside<{ position: TPosition }>`
  position: absolute;

  ${({ position }) => {
    let top = 50;

    switch (position) {
      case "center":
        break;
      case "top":
        top = 25;
      case "bottom":
        top = 75;
    }

    return `
      top: ${top}%;
      left: 50%;
      transform: translate(-50%, -50%);
    `;
  }}
`;

type TProps = {
  children: ReactNode;
  position?: TPosition;
  style?: CSSProperties;
  className?: string;
};

export default function CarouselCaption({
  children,
  position = "center",
  style,
  className,
}: TProps) {
  return (
    <MainContainer position={position} className={className} style={style}>
      {children}
    </MainContainer>
  );
}
