import { darken } from "polished";

import theme from "../../theme";
import { TStyledComponentType } from "../../types";

import { TButtonFormat, TButtonSize, TButtonType } from "./types";

function getButtonStyles({
  type,
  format,
  size,
}: {
  type: TButtonType;
  format?: TButtonFormat;
  size?: TButtonSize;
}) {
  const buttonsTheme = {
    primary: {
      backgroundColor: theme.colorsPalette.blue.default,
      fontColor: theme.colorsPalette.white.default,
    },
    danger: {
      backgroundColor: theme.colorsPalette.red.default,
      fontColor: theme.colorsPalette.white.default,
    },
    success: {
      backgroundColor: theme.colorsPalette.green.default,
      fontColor: theme.colorsPalette.white.default,
    },
  } as {
    [key in TStyledComponentType]: {
      backgroundColor: string;
      fontColor: string;
    };
  };

  const { backgroundColor, fontColor } = buttonsTheme[
    type as TStyledComponentType
  ];

  switch (type) {
    case "primary":
      return {
        backgroundColor: format === "outline" ? "transparent" : backgroundColor,
        border: format === "outline" ? `1px solid ${backgroundColor}` : "none",
        fontColor: format === "outline" ? backgroundColor : fontColor,
        boxShadow:
          "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
        backgroundColorOnHover:
          format === "outline"
            ? backgroundColor
            : theme.colorsPalette.blue.dark,
        fontColorOnHover: fontColor,
        fontSize:
          size === "small" ? theme.fontSizes.small : theme.fontSizes.regular,
        padding: size === "small" ? "4px 16px" : "12px 24px",
      };

    case "secondary":
      return {
        backgroundColor:
          format === "outline"
            ? "transparent"
            : theme.colorsPalette.blue.lighter,
        border:
          format === "outline" ? theme.colorsPalette.gray.superLight : "none",
        fontColor: theme.colorsPalette.blue.default,
        boxShadow: "none",
        backgroundColorOnHover: theme.colorsPalette.blue.lighter,
        fontColorOnHover: theme.colorsPalette.blue.default,
        fontSize:
          size === "small" ? theme.fontSizes.small : theme.fontSizes.regular,
        padding: size === "small" ? "4px 16px" : "12px 24px",
      };

    default:
      return {
        backgroundColor: format === "outline" ? "transparent" : backgroundColor,
        border: format === "outline" ? `1px solid ${backgroundColor}` : "none",
        fontColor: format === "outline" ? backgroundColor : fontColor,
        boxShadow:
          "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
        backgroundColorOnHover:
          format === "outline" ? backgroundColor : darken(0.9, fontColor),
        fontColorOnHover: fontColor,
        fontSize: size === "small" ? "12px" : "16px",
        padding: size === "small" ? "4px 16px" : "10px 24px",
      };
  }
}

export { getButtonStyles };
