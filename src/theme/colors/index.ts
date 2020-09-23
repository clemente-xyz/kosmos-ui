import { IColors } from "./types";

const colorsPalette = {
  blue: {
    default: "hsl(209, 100%, 50%)",
    light: "hsl(209, 100%, 70%)",
    lighter: "hsl(208, 100%, 97%)",
    dark: "hsl(209, 75%, 25%)",
    darker: "hsl(223, 46%, 24%)",
  },
  cyan: {
    default: "hsl(181, 83%, 65%)",
    light: "hsl(181, 83%, 75%)",
    lighter: "hsl(181, 83%, 90%)",
    dark: "hsl(181, 83%, 30%)",
    darker: "hsl(181, 83%, 20%)",
  },
  black: {
    default: "hsl(210, 73%, 15%)",
    light: "hsl(210, 73%, 18%)",
    lighter: "hsl(210, 73%, 20%)",
    dark: "hsl(210, 73%, 8%)",
    darker: "hsl(210, 73%, 5%)",
  },
  gray: {
    default: "hsl(221,22%, 66%)",
    light: "hsl(221,22%, 71%)",
    lighter: "hsl(221,22%, 90%)",
    superLight: "hsl(210,50%, 98%)",
    dark: "hsl(221,22%, 40%)",
    darker: "hsl(221,22%, 20%)",
  },
  white: {
    default: "hsl(0, 0%, 100%)",
    light: "hsl(0, 0%, 100%)",
    lighter: "hsl(0, 0%, 100%)",
    dark: "hsl(0, 0%, 10%)",
    darker: "hsl(0, 0%, 15%)",
  },
  red: {
    default: "hsl(0, 100%, 70%)",
    light: "hsl(0, 100%, 77%)",
    lighter: "hsl(0, 100%, 90%)",
    dark: "hsl(0, 100%, 45%)",
    darker: "hsl(0, 100%, 30%)",
  },
  green: {
    default: "hsl(153, 60%, 53%)",
    light: "hsl(153, 60%, 73%)",
    lighter: "hsl(153, 60%, 83%)",
    dark: "hsl(153, 60%, 33%)",
    darker: "hsl(153, 60%, 13%)",
  },
  yellow: {
    default: "hsl(42, 93%, 58%)",
    light: "hsl(42, 93%, 80%)",
    lighter: "hsl(42, 93%, 90%)",
    dark: "hsl(42, 93%, 40%)",
    darker: "hsl(42, 93%, 25%)",
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
