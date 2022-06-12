import { CSSProperties } from "react";

export type TCheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type?: "checkbox";
  style?: TCheckboxStyle;
  color?: string;
  custom?: boolean;
};

export type TCheckboxStyle = {
  root?: CSSProperties;
  checkbox?: CSSProperties;
  label?: CSSProperties;
  icon?: CSSProperties;
};

export type TStyledCheckboxProps = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  "checked" | "disabled"
> &
  Required<Pick<TCheckboxProps, "color">>;
