import React from "react";

import { TCarouselArrowProps } from "./types";
import { Icon } from "./styles";

export default function CarouselArrow({
  onClick,
  direction,
  arrow: BaseArrow,
  style,
  className,
}: TCarouselArrowProps) {
  if (BaseArrow) return <BaseArrow direction={direction} onClick={onClick} />;

  return (
    <a onClick={onClick}>
      <Icon className={className} style={style} direction={direction} />
    </a>
  );
}
