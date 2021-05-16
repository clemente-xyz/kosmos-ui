import BaseSelect from "react-select";
import { CSSProperties } from "styled-components";

export type TSelectProps = Omit<BaseSelect["props"], "styles"> & {
  styles?: TSelectInputStyles;
};

export type TSelectInputStyles = {
  menuPortal?: CSSProperties;
  control?: CSSProperties;
  container?: CSSProperties;
  valueContainer?: CSSProperties;
  indicatorSeparator?: CSSProperties;
  singleValue?: CSSProperties;
  placeholder?: CSSProperties;
  menu?: CSSProperties;
  option?: CSSProperties;
};
