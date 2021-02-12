import React from "react";

import { TCarouselBulletProps } from "./types";
import { MainContainer } from "./styles";

export default function CarouselBullet({
  index,
  bullet: BaseBullet,
  setSlide,
  activeIndex,
  style,
  className,
}: TCarouselBulletProps) {
  function updateSlide() {
    setSlide(index);
  }

  if (BaseBullet)
    return (
      <BaseBullet
        key={index}
        isActive={index === activeIndex}
        onClick={updateSlide}
      />
    );

  return (
    <MainContainer
      key={index}
      active={index === activeIndex}
      onClick={updateSlide}
      style={style}
      className={className}
    />
  );
}
