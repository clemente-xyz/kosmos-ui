import React from "react";

import {
  TStyledComponentType,
  TStyledComponentFormat,
  TStyledComponentSize,
} from "../../types";

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  variant: Omit<TStyledComponentType, "warning">;
  format?: TStyledComponentFormat;
  size?: Omit<TStyledComponentSize, "large">;
  style?: React.CSSProperties;
  className?: string;
  loading?: boolean;
};

export type TButtonVariant = Omit<TStyledComponentType, "warning">;

export type TButtonFormat = TStyledComponentFormat;

export type TButtonSize = Omit<TStyledComponentSize, "large">;
