export type TTheme = {
  colorsPalette: TColorPalette;
  fontSizes: TFontSizes;
  fontWeights: TFontsWeights;
};

export type TColorPalette = Record<TColor, TColorVariant>;

export type TColor =
  | "blue"
  | "cyan"
  | "black"
  | "gray"
  | "white"
  | "red"
  | "green"
  | "yellow"
  | "orange"
  | "purple"
  | "pink";

export type TColorVariant = {
  default: string;
  dark: string;
  darker: string;
  superDark?: string;
  light: string;
  lighter: string;
  superLight?: string;
};

export type TFontSizes = {
  huge: string;
  xxxlarge: string;
  xxlarge: string;
  xlarge: string;
  regularLarge: string;
  regular: string;
  regularSmall: string;
  small: string;
  xsmall: string;
  xxsmall: string;
  xxxsmall: string;
  tiny: string;
};

export type TFontsWeights = {
  bolder: number;
  bold: number;
  regular: number;
  light: number;
  lighter: number;
};
