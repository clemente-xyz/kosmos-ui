import React, { CSSProperties } from "react";

export type TSliderProps = {
  value: number;
  setValue(_: number): void;
  style?: TSliderInputStyleProps;
  min?: number;
  max?: number;
  showLabels?: boolean;
};

type TSliderInputStyleProps = {
  root?: Omit<CSSProperties, "height" | "appearance">;
  track?: Pick<CSSProperties, "backgroundColor" | "height">;
  rail?: Pick<CSSProperties, "backgroundColor">;
  thumb?: Pick<CSSProperties, "backgroundColor" | "height">;
};

export type TSliderInputProps = Pick<TSliderControllerProps, "style"> & {
  percent: string;
};

export type TSliderControllerProps = Required<
  Omit<TSliderProps, "setValue" | "style">
> & {
  onChange(_: React.ChangeEvent<HTMLInputElement>): void;
  step: number;
  style: Required<TSliderInputStyleProps>;
};
