import { darken } from "polished";

import theme from "../../theme";

import { IButtonFormat, IButtonSize, IButtonType } from "./types";

function getButtonStyles({
  type,
  format,
  size,
}: {
  type: IButtonType;
  format?: IButtonFormat;
  size?: IButtonSize;
}) {
  const buttonsTheme = {
    primary: {
      backgroundColor: theme.colorsPalette.black.default,
      fontColor: theme.colorsPalette.white.default,
    },
    danger: {
      backgroundColor: theme.colorsPalette.red.default,
      fontColor: theme.colorsPalette.white.default,
    },
    success: {
      backgroundColor: theme.colorsPalette.black.default,
      fontColor: theme.colorsPalette.white.default,
    },
  };

  switch (type) {
    case "primary":
      return {
        backgroundColor:
          format === "outline"
            ? "transparent"
            : buttonsTheme[type].backgroundColor,
        border:
          format === "outline"
            ? `1px solid ${buttonsTheme[type].backgroundColor}`
            : "none",
        fontColor:
          format === "outline"
            ? buttonsTheme[type].backgroundColor
            : buttonsTheme[type].fontColor,
        boxShadow:
          "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
        backgroundColorOnHover:
          format === "outline"
            ? buttonsTheme[type].backgroundColor
            : darken(0.9, buttonsTheme[type].fontColor),
        fontColorOnHover: buttonsTheme[type].fontColor,
        fontSize:
          size === "small" ? theme.fontSizes.small : theme.fontSizes.regular,
        padding: size === "small" ? "5px 15px" : "10px 25px",
      };

    case "secondary":
      return {
        backgroundColor:
          format === "outline"
            ? "transparent"
            : theme.colorsPalette.gray.superLight,
        border:
          format === "outline" ? theme.colorsPalette.gray.superLight : "none",
        fontColor:
          format === "outline"
            ? theme.colorsPalette.gray.superLight
            : theme.colorsPalette.black.default,
        boxShadow: "none",
        backgroundColorOnHover:
          format === "outline"
            ? theme.colorsPalette.gray.superLight
            : darken(0.1, theme.colorsPalette.gray.superLight as string),
        fontColorOnHover: theme.colorsPalette.black.default,
        fontSize: size === "small" ? "12px" : "15px",
        padding: size === "small" ? "5px 15px" : "10px 25px",
      };

    default:
      return {
        backgroundColor:
          format === "outline"
            ? "transparent"
            : buttonsTheme[type].backgroundColor,
        border:
          format === "outline"
            ? `1px solid ${buttonsTheme[type].backgroundColor}`
            : "none",
        fontColor:
          format === "outline"
            ? buttonsTheme[type].backgroundColor
            : buttonsTheme[type].fontColor,
        boxShadow:
          "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
        backgroundColorOnHover:
          format === "outline"
            ? buttonsTheme[type].backgroundColor
            : darken(0.9, buttonsTheme[type].fontColor),
        fontColorOnHover: buttonsTheme[type].fontColor,
        fontSize: size === "small" ? "12px" : "15px",
        padding: size === "small" ? "5px 15px" : "10px 25px",
      };
  }
}

export { getButtonStyles };
