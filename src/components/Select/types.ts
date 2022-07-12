import { CSSProperties } from "react";
import BaseSelect from "react-select";

export type TSelectProps = BaseSelect["props"] & {
  style?: TSelectInputStyles;
};

export type TSelectInputStyles = {
  menuPortal?: CSSProperties;
  control?: CSSProperties;
  container?: CSSProperties;
  valueContainer?: CSSProperties;
  dropdownIndicator?: CSSProperties;
  indicatorContainer?: CSSProperties;
  indicatorSeparator?: CSSProperties;
  singleValue?: CSSProperties;
  placeholder?: CSSProperties;
  menu?: CSSProperties;
  option?: CSSProperties;
};
