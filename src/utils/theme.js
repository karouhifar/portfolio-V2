import { rgba } from "polished";
import { breakpoints } from "./breakpoints";

const defaultColors = {
  primary: "#495fef",
  secondary: "#f5f5f7",
  white: "#ffffff",
  dark: "#161c2d",
  ash: "#413e65",
  black: "#000000",
  warning: "#fedc5a",
  success: "#56b381",
  info: "#482EC3",
};

const colors = {
  primary: defaultColors.primary,
  secondary: defaultColors.secondary,
  light: defaultColors.white,
  lightShade: rgba(defaultColors.white, 0.5),
  dark: defaultColors.dark,
  darkShade: rgba(defaultColors.dark, 0.5),
  ash: defaultColors.ash,
  bg: defaultColors.white,
  bgShade: rgba(defaultColors.white, 0.5),
  front: defaultColors.dark,
  frontShade: rgba(defaultColors.dark, 0.5),
  border: rgba(defaultColors.ash, 0.115),
  shadow: rgba(defaultColors.ash, 0.175),
  heading: defaultColors.dark,
  text: rgba(defaultColors.dark, 0.7),
  warning: defaultColors.warning,
  success: defaultColors.success,
  info: defaultColors.info,

  modes: {
    dark: {
      primary: defaultColors.primary,
      secondary: defaultColors.secondary,
      light: defaultColors.white,
      lightShade: rgba(defaultColors.white, 0.5),
      dark: defaultColors.dark,
      darkShade: rgba(defaultColors.dark, 0.5),
      ash: defaultColors.ash,
      bg: defaultColors.dark,
      bgShade: rgba(defaultColors.dark, 0.5),
      front: defaultColors.white,
      frontShade: rgba(defaultColors.white, 0.5),
      border: rgba(defaultColors.ash, 0.115),
      shadow: rgba(defaultColors.ash, 0.175),
      heading: defaultColors.white,
      text: rgba(defaultColors.white, 0.7),
      warning: defaultColors.warning,
      success: defaultColors.success,
      info: defaultColors.info,
    },
  },
};

const theme = {
  initialColorModeName: "light",
  colors: colors,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: [
    `${breakpoints.sm}px`,
    `${breakpoints.md}px`,
    `${breakpoints.lg}px`,
    `${breakpoints.xl}px`,
  ],
};

export default theme;
