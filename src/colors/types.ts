export type IColorType = {
  default: string;
  dark: string;
  darker: string;
  superDark?: string;
  light: string;
  lighter: string;
  superLight?: string;
};

export type IColors = {
  [colorname: string]: IColorType;
};
