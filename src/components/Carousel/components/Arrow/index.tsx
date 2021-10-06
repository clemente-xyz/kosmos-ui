import React from "react";

import { TCarouselArrowProps } from "./types";
import { CarouselArrowIcon, CarouselArrowContainer } from "./styles";

export default function CarouselArrow({
  onClick,
  direction,
  arrow: BaseArrow,
  style,
  className,
}: TCarouselArrowProps) {
  if (BaseArrow) return <BaseArrow direction={direction} onClick={onClick} />;

  return (
    <CarouselArrowContainer onClick={onClick} direction={direction}>
      <CarouselArrowIcon
        className={className}
        style={style}
        direction={direction}
      />
    </CarouselArrowContainer>
  );
}
