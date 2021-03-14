import React from "react";
import { CSSProperties } from "styled-components";

import {
  TStyledComponentType,
  TStyledComponentFormat,
  TStyledComponentSize,
} from "../../types";

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: Exclude<TStyledComponentType, "warning">;
  format?: TStyledComponentFormat;
  size?: Exclude<TStyledComponentSize, "large">;
  style?: React.CSSProperties;
  className?: string;
  loading?: boolean;
  as?: "button" | "div";
};

export type TButtonVariantStyle = Pick<
  CSSProperties,
  "backgroundColor" | "border" | "color" | "fontSize" | "padding"
> & {
  backgroundColorOnHover?: string;
  colorOnHover?: string;
};

export type TButtonVariant = Exclude<TStyledComponentType, "warning">;

export type TButtonFormat = TStyledComponentFormat;

export type TButtonSize = Exclude<TStyledComponentSize, "large">;
