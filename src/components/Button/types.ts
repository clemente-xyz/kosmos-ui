import React from "react";

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

export type TButtonVariant = Exclude<TStyledComponentType, "warning">;

export type TButtonFormat = TStyledComponentFormat;

export type TButtonSize = Exclude<TStyledComponentSize, "large">;
