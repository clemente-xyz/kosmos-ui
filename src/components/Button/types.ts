import React from "react";

import {
  TStyledComponentType,
  TStyledComponentFormat,
  TStyledComponentSize,
} from "../../types";

export type TButtonProps = {
  onClick?: () => void;
  text: string;
  type: Omit<TStyledComponentType, "warning">;
  format?: TStyledComponentFormat;
  size?: Omit<TStyledComponentSize, "large">;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
};

export type TButtonType = Omit<TStyledComponentType, "warning">;

export type TButtonFormat = TStyledComponentFormat;

export type TButtonSize = Omit<TStyledComponentSize, "large">;
