import { CSSProperties } from "react";

export type TCarouselBulletProps = {
  bullet?: TCarouselBulletComponent;
  style?: CSSProperties;
  className?: string;
  index: number;
  setSlide: (index: number) => void;
  activeIndex: number;
};

export type TCarouselBulletComponentProps = {
  isActive: boolean;
  onClick: () => void;
};

export type TCarouselBulletComponent = (
  props: TCarouselBulletComponentProps
) => React.ReactElement;
