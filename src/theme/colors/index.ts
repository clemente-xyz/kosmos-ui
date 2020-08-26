import { IColors } from "./types";

const colorsPalette = {
  blue: {
    default: "hsl(209, 75%, 50%)",
    light: "hsl(209, 75%, 70%)",
    lighter: "hsl(209, 75%, 85%)",
    dark: "hsl(209, 75%, 25%)",
    darker: "hsl(209, 75%, 10%)",
  },
  cyan: {
    default: "hsl(190, 100%, 50%)",
    light: "hsl(190, 100%, 70%)",
    lighter: "hsl(190, 100%, 90%)",
    dark: "hsl(190, 100%, 30%)",
    darker: "hsl(190, 100%, 20%)",
  },
  black: {
    default: "hsl(210, 73%, 15%)",
    light: "hsl(210, 73%, 18%)",
    lighter: "hsl(210, 73%, 20%)",
    dark: "hsl(210, 73%, 8%)",
    darker: "hsl(210, 73%, 5%)",
  },
  gray: {
    default: "hsl(211,11%, 51%)",
    light: "hsl(211,11%, 71%)",
    lighter: "hsl(210,11%, 90%)",
    superLight: "hsl(210,50%, 98%)",
    dark: "hsl(211,11%, 25%)",
    darker: "hsl(211,11%,15%)",
  },
  white: {
    default: "hsl(0, 0%, 100%)",
    light: "hsl(0, 0%, 100%)",
    lighter: "hsl(0, 0%, 100%)",
    dark: "hsl(0, 0%, 10%)",
    darker: "hsl(0, 0%, 15%)",
  },
  red: {
    default: "hsl(6, 92%, 65%)",
    light: "hsl(6, 92%, 77%)",
    lighter: "hsl(6, 92%, 90%)",
    dark: "hsl(6, 92%, 45%)",
    darker: "hsl(6, 92%, 30%)",
  },
  green: {
    default: "hsl(153, 60%, 53%)",
    light: "hsl(153, 60%, 73%)",
    lighter: "hsl(153, 60%, 83%)",
    dark: "hsl(153, 60%, 33%)",
    darker: "hsl(153, 60%, 13%)",
  },
  yellow: {
    default: "hsl(59, 94%, 65%)",
    light: "hsl(59, 94%, 80%)",
    lighter: "hsl(60, 92%, 90%)",
    dark: "hsl(59, 94%, 50%)",
    darker: "hsl(59, 94%, 25%)",
  },
  orange: {
    default: "hsl(39, 85%, 58%)",
    light: "hsl(39, 85%, 78%)",
    lighter: "hsl(39, 85%, 88%)",
    dark: "hsl(39, 85%, 38%)",
    darker: "hsl(39, 85%, 18%)",
  },
  purple: {
    default: "hsl(243, 100%, 68%)",
    light: "hsl(243, 100%, 82%)",
    lighter: "hsl(243, 100%, 93%)",
    dark: "hsl(243, 100%, 58%)",
    darker: "hsl(243, 100%,35%)",
  },
} as IColors;

export { colorsPalette };
