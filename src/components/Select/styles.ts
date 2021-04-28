import theme from "../../theme";

export const selectInputStyles = {
  //@ts-ignore
  control(base) {
    return {
      ...base,
      fontSize: theme.fontSizes.regular,
      color: theme.colorsPalette.gray.light,
      border: "none",
      borderRadius: "0",
      boxShadow: "none",
      "&:hover": {
        border: "none",
        boxShadow: "none",
      },
      "&:focus": { border: "none", boxShadow: "none" },
      "&:active": { border: "none", boxShadow: "none" },
    };
  },
  //@ts-ignore
  container(base) {
    return {
      ...base,
      width: "100%",
      border: "none",
      borderBottom: `2px solid ${theme.colorsPalette.gray.lighter}`,
      "&:hover": {
        borderBottom: `2px solid ${theme.colorsPalette.blue.default}`,
      },
    };
  },
  //@ts-ignore
  valueContainer(base) {
    return {
      ...base,
      padding: "8px 0",
      color: theme.colorsPalette.gray.light,
    };
  },
  //@ts-ignore
  dropdownIndicator(base) {
    return {
      ...base,
    };
  },
  indicatorSeparator() {
    return { display: "none" };
  },

  //@ts-ignore
  singleValue(base) {
    return {
      ...base,
      marginLeft: "0",
      color: theme.colorsPalette.gray.light,
    };
  },
  //@ts-ignore
  placeholder(base) {
    return { ...base, marginLeft: "0" };
  },
  //@ts-ignore
  menu(base) {
    return {
      ...base,
      border: "none",
      color: "hsl(221,22%,66%)",
      fontSize: 14,
      padding: 16,
      boxShadow:
        "0px 0px 7px 20px rgba(0,0,0,0), 0 3px 5px 5px rgba(0,0,0,0.03)",
      minWidth: 180,
    };
  },
  //@ts-ignore
  option(base, state) {
    return {
      ...base,
      border: "none",
      color: state.isSelected
        ? theme.colorsPalette.blue.default
        : "hsl(221,22%,66%)",
      backgroundColor: state.isSelected
        ? theme.colorsPalette.blue.lighter
        : state.isFocused
        ? theme.colorsPalette.blue.lighter
        : "transparent",
      borderRadius: 5,
      cursor: "pointer",
      padding: "12px 20px",
    };
  },
};
