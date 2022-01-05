import BaseSelect from "react-select";
import { CSSProperties } from "styled-components";

export type TSelectProps = BaseSelect["props"] & {
  style?: TSelectInputStyles;
};

export type TSelectInputStyles = {
  menuPortal?: CSSProperties;
  control?: CSSProperties;
  container?: CSSProperties;
  valueContainer?: CSSProperties;
  indicatorContainer?: CSSProperties;
  indicatorSeparator?: CSSProperties;
  singleValue?: CSSProperties;
  placeholder?: CSSProperties;
  menu?: CSSProperties;
  option?: CSSProperties;
};
