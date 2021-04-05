import React, { CSSProperties } from "react";

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: Exclude<TComponentType, "warning">;
  format?: TComponentFormat;
  size?: Exclude<TComponentSize, "large">;
  style?: React.CSSProperties;
  className?: string;
  loading?: boolean;
  as?: "button" | "div";
};

export type TButtonVariantStyle = Pick<
  CSSProperties,
  "backgroundColor" | "border" | "color" | "fontSize" | "padding" | "minWidth"
> & {
  backgroundColorOnHover?: string;
  colorOnHover?: string;
};

export type TButtonVariant = Exclude<TComponentType, "warning">;

export type TButtonFormat = TComponentFormat;

export type TButtonSize = Exclude<TComponentSize, "large">;
