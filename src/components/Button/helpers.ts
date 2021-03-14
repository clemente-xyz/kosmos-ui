import { CSSProperties } from "react";
import { darken } from "polished";

import theme from "../../theme";

import { TButtonProps, TButtonVariant, TButtonVariantStyle } from "./types";

export function getButtonVariantStyles({
  variant,
  format,
  size,
}: Pick<TButtonProps, "variant" | "format" | "size">) {
  const variantsTheme: Record<TButtonVariant, CSSProperties> = {
    primary: {
      backgroundColor: theme.colorsPalette.blue.default,
      color: theme.colorsPalette.white.default,
    },
    secondary: {
      backgroundColor: theme.colorsPalette.gray.light,
      color: theme.colorsPalette.white.default,
    },
    danger: {
      backgroundColor: theme.colorsPalette.red.default,
      color: theme.colorsPalette.white.default,
    },
    success: {
      backgroundColor: theme.colorsPalette.green.default,
      color: theme.colorsPalette.white.default,
    },
  };

  const button = variantsTheme[variant];

  const variantStyle: TButtonVariantStyle = {
    backgroundColor:
      format === "outline" || format === "link"
        ? "transparent"
        : button.backgroundColor,
    border:
      format === "outline" ? `1px solid ${button.backgroundColor}` : "none",
    color:
      format === "outline" || format === "link"
        ? button.backgroundColor
        : button.color,
    backgroundColorOnHover:
      format === "outline"
        ? button.backgroundColor
        : format === "link"
        ? "transparent"
        : darken(0.12, button.backgroundColor as string),
    colorOnHover:
      format === "link"
        ? darken(0.12, button.backgroundColor as string)
        : button.color,
    fontSize:
      size === "small" ? theme.fontSizes.small : theme.fontSizes.regular,
    padding:
      format === "link" ? 0 : size === "small" ? "4px 16px" : "12px 16px",
    minWidth: format === "link" ? "unset" : 120,
  };

  return variantStyle;
}
