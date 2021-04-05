import { CSSProperties } from "react";

import theme from "../../theme";
import { TComponentType } from "types/components";

/**
 * Validates if the provided date follows the
 * --- <short weekday>, <numeric day> <short month>. <numeric year> --- format.
 * @param date - String representation of the date that wants to be verified.
 * @returns True if the provided date is on format, false otherwise.
 */
function validateDateFormat(date?: string): boolean {
  const validationRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  return !!(date && validationRegex.test(date));
}

/**
 * Gets the main styles for a styled component, based on the provided type.
 * @param type - A styled component type.
 * @returns The background color and content color to be passed to the styled component.
 */
function getStyledComponentMainStyles(
  type: TComponentType
): {
  backgroundColor: string;
  color: string;
} {
  switch (type) {
    case "primary":
      return {
        backgroundColor: theme.colorsPalette.blue.lighter,
        color: theme.colorsPalette.blue.default,
      };

    case "secondary":
      return {
        backgroundColor: theme.colorsPalette.gray.lighter,
        color: theme.colorsPalette.gray.default,
      };

    case "danger":
      return {
        backgroundColor: theme.colorsPalette.red.lighter,
        color: theme.colorsPalette.red.default,
      };

    case "success":
      return {
        backgroundColor: theme.colorsPalette.green.lighter,
        color: theme.colorsPalette.green.default,
      };

    case "warning":
      return {
        backgroundColor: theme.colorsPalette.yellow.lighter,
        color: theme.colorsPalette.yellow.default,
      };

    default:
      return {
        backgroundColor: theme.colorsPalette.blue.lighter,
        color: theme.colorsPalette.blue.default,
      };
  }
}

/**
 * Parses an CSS-styles object into a CSS template literal.
 * @param styledObject - CSS props in JSON format (keys in camelCase).
 */
function toCSS(stylesObject: CSSProperties) {
  function createParser(matcher: RegExp, replacer: (_: string) => string) {
    const regex = RegExp(matcher, "g");

    return (string: string) => {
      if (!string.match(regex)) {
        return string;
      }

      return string.replace(regex, replacer);
    };
  }

  const kebabize = createParser(
    /[A-Z]/,
    (match: string) => `-${match.toLowerCase()}`
  );

  const lines = Object.keys(stylesObject).map(
    (property) =>
      `${kebabize(property)}: ${
        (stylesObject as { [key: string]: string })[property]
      };`
  );

  return lines.join("\n");
}

export { validateDateFormat, toCSS, getStyledComponentMainStyles };
