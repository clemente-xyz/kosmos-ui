import { CSSProperties } from "react";

import { TDirection } from "../../../../types/general";

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
