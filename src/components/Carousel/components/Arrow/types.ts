import { CSSProperties } from "react";

export type TCarouselArrowComponent = (
  props: Pick<TCarouselArrowProps, "onClick" | "direction">
) => React.ReactElement;

export type TCarouselArrowProps = {
  onClick: () => void;
  direction: TCarouselArrowDirection;
  arrow?: TCarouselArrowComponent;
  style?: CSSProperties;
  className?: string;
};

export type TCarouselArrowDirection = Extract<TDirection, "left" | "right">;
