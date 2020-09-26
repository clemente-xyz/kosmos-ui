import { CSSProperties, FocusEvent } from "react";

export interface IDatepickerProps {
  placeholder?: string;
  ids?: string[];
  names?: string[];
  mainContainerStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  baseColor?: string;
  highlightColor?: string;
  autoComplete?: string;
  onBlur?: (event: FocusEvent<any>) => void;
  values: { startDate: null | Date; endDate: null | Date };
  onChanges: ((event: any) => void)[];
  labels: string[];
}
