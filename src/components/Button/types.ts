import React from "react";

export type IProps = {
  onClick?: () => void;
  text: string;
  type: IButtonType;
  format?: IButtonFormat;
  size?: IButtonSize;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
};

export type IButtonType = "primary" | "secondary" | "danger" | "success";

export type IButtonFormat = "fill" | "outline";

export type IButtonSize = "small" | "regular";
