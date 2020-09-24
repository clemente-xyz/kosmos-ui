import theme from "../../theme";
import { TChipType } from "./types";

function getChipMainStyles(
  type: TChipType
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

export { getChipMainStyles };
