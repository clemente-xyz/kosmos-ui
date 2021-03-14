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
      format === "outline" ? "transparent" : button.backgroundColor,
    border:
      format === "outline" ? `1px solid ${button.backgroundColor}` : "none",
    color: format === "outline" ? button.backgroundColor : button.color,
    backgroundColorOnHover:
      format === "outline"
        ? button.backgroundColor
        : darken(0.12, button.backgroundColor as string),
    colorOnHover: button.color,
    fontSize: size === "small" ? theme.fontSizes.small : theme.fontSizes.small,
    padding: size === "small" ? "4px 16px" : "12px 16px",
  };

  // @ts-ignore
  // const component = styled(Component).attrs(
  //   (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => ({
  //     disabled: props.disabled,
  //   })
  // )`
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   padding: ${variantStyle.padding};
  //   min-width: 120px;
  //   max-width: 180px;
  //   font-size: ${variantStyle.fontSize};
  //   font-weight: 700;
  //   border: ${variantStyle.border};
  //   background-color: ${variantStyle.backgroundColor};
  //   color: ${variantStyle.color};
  //   border-radius: 5px;
  //   transition: all 0.3s;

  //   &:hover {
  //     background-color: ${variantStyle.backgroundColorOnHover};
  //     color: ${variantStyle.colorOnHover};
  //     cursor: pointer;
  //   }

  //   &:active {
  //     outline: none;
  //   }

  //   &:focus {
  //     outline: none;
  //   }

  //   &:disabled,
  //   &[disabled] {
  //     opacity: 0.6;
  //     cursor: not-allowed;
  //   }
  // `;

  return variantStyle;
}
