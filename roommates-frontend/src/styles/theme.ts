const palette = {
  primary: {
    light: "#8EA5F9",
    main: "#4361EE",
    dark: "#2134AB",
  },
  info: {
    light: "#93F0FA",
    main: "#4CC9F0",
    dark: "#2679AC",
  },
  error: {
    light: "#FEAF79",
    main: "#FF5735",
    dark: "#B52510",
  },
  warning: {
    light: "#FDEE80",
    main: "#FFD344",
    dark: "#B39716",
  },
  success: {
    light: "#A4E878",
    main: "#48B524",
    dark: "#1E8212",
  },
  colors: {
    lightest: "#ffffff",
    pink: "#f72585",
    purple: "#7209b7",
    violet: "#3a0ca3",
    disabled: "#E5E5E5",
    dark: "#000000",
  },

  background: {
    lightest: "#ffffff",
    pink: "#f72585",
    purple: "#7209b7",
    violet: "#3a0ca3",
    disabled: "#E5E5E5"
  },
  borders: {
    gray: "rgba(133, 138, 164, 0.3)"
  }
}

const breakpoints = ["425px", "768px", "1024px", "1200px", "1440px", "2560px"];

const mediaQueries = {
  small: `@media screen and (min-width: ${breakpoints[0]})`,
  medium: `@media screen and (min-width: ${breakpoints[1]})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`,
  extralarge: `@media screen and (min-width: ${breakpoints[3]})`,
  extraExtralarge: `@media screen and (min-width: ${breakpoints[4]})`,
};

export default {
  palette,
  breakpoints,
  mediaQueries
};
