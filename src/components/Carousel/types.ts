import { CSSProperties } from "react";

import { TCarouselArrowComponent } from "./components/Arrow/types";
import { TCarouselBulletComponent } from "./components/Bullet/types";

import CarouselSlide from "./components/Slide";
import CarouselCaption from "./components/Caption";

export type TCarousel = JSX.Element & {
  Slide: typeof CarouselSlide;
  Caption: typeof CarouselCaption;
};

export type TCarouselProps = {
  activeIndex?: number;
  arrow?: TCarouselArrowComponent;
  autoplay?: number;
  bullet?: TCarouselBulletComponent;
  children: JSX.Element[];
  withArrows?: boolean;
  withBullets?: boolean;
  onSlideChange?: (_: number) => void;
  setSlideCustom?: (_: number) => number;
  slidesAtOnce?: number;
  style?: {
    root?: CSSProperties;
    arrow?: CSSProperties;
    bullet?: CSSProperties;
  };
};
