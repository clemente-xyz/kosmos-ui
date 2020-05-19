import { IColors } from "./types";

const colors = {
  blue: {
    default: "hsl(216, 100%, 50%)",
    light: "hsl(216, 100%, 65%)",
    lighter: "hsl(216, 100%, 85%)",
    dark: "hsl(216, 100%, 35%)",
    darker: "hsl(216, 100%, 15%)",
  },
  black: {
    default: "hsl(0, 0%, 0%)",
    light: "hsl(0, 0%, 10%)",
    lighter: "hsl(0, 0%, 15%)",
    dark: "hsl(0, 0%, 0%)",
    darker: "hsl(0, 0%, 0%)",
  },
  gray: {
    default: "hsl(0, 0%, 50%)",
    light: "hsl(0, 0%, 60%)",
    lighter: "hsl(0, 0%, 90%)",
    superLight: "hsl(0, 0%, 98%)",
    dark: "hsl(0, 0%, 20%)",
    darker: "hsl(0, 0%, 10%)",
  },
  white: {
    default: "hsl(0, 0%, 100%)",
    light: "hsl(0, 0%, 100%)",
    lighter: "hsl(0, 0%, 100%)",
    dark: "hsl(0, 0%, 10%)",
    darker: "hsl(0, 0%, 15%)",
  },
  red: {
    default: "hsl(0, 100%, 65%)",
    light: "hsl(0, 100%, 75%)",
    lighter: "hsl(0, 100%, 90%)",
    dark: "hsl(0, 100%, 45%)",
    darker: "hsl(0, 100%, 30%)",
  },
  green: {
    default: "hsl(126, 81%, 38%)",
    light: "hsl(126, 80%, 70%)",
    lighter: "hsl(126, 79%, 85%)",
    dark: "hsl(126, 80%, 30%)",
    darker: "hsl(126, 80%, 20%)",
  },
  yellow: {
    default: "hsl(59, 94%, 65%)",
    light: "hsl(59, 94%, 80%)",
    lighter: "hsl(60, 92%, 90%)",
    dark: "hsl(59, 94%, 50%)",
    darker: "hsl(59, 94%, 40%)",
  },
  orange: {
    default: "hsl(40, 100%, 58%)",
    light: "hsl(40, 100%, 75%)",
    lighter: "hsl(40, 100%, 85%)",
    dark: "hsl(40, 100%, 50%)",
    darker: "hsl(40, 100%, 40%)",
  },
  purple: {
    default: "hsl(277, 100%, 66%)",
    light: "hsl(277, 100%, 75%)",
    lighter: "hsl(277, 100%, 85%)",
    dark: "hsl(277, 100%, 60%)",
    darker: "hsl(277, 100%, 40%)",
  },
} as IColors;

export default { colors };
