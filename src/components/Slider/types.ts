import React, { CSSProperties } from "react";

import { ValueOf } from "../../types/general";

export type TSliderProps = {
  value: number | number[];
  setValue(_: number | number[]): void;
  style?: TSliderInputStyleProps;
  min?: number;
  max?: number;
  step?: number;
  showLabels?: boolean;
};

type TSliderInputStyleProps = {
  root?: Omit<CSSProperties, "height" | "appearance">;
  track?: Pick<CSSProperties, "backgroundColor" | "height">;
  rail?: Pick<CSSProperties, "backgroundColor" | "height">;
  thumb?: Pick<CSSProperties, "backgroundColor" | "height">;
};

export type TSliderInputProps = Pick<TSliderControllerProps, "style"> & {
  percent: string;
  index: number;
};

export type TSliderRailProps = {
  x0: number;
  x1: number;
  min: number;
  max: number;
  railStyle?: ValueOf<Pick<TSliderInputStyleProps, "rail">>;
  trackStyle?: ValueOf<Pick<TSliderInputStyleProps, "track">>;
};

export type TSliderControllerProps = Required<
  Omit<TSliderProps, "setValue" | "style" | "value">
> & {
  values: number[];
  handleValuesChange(
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void;
  style: Required<TSliderInputStyleProps>;
};
