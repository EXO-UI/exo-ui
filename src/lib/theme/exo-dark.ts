import { GlobalTheme } from "./types";
import { themeBase } from "./base";

const lightColor = {
  "100": "#FFFFFF",
  "200": "#FAFAFC",
  "300": "#F2F2F5",
  "400": "#EBEBF0",
  "500": "#E3E4EB",
};
const darkColor = {
  "100": "#C7C8D9",
  "200": "#8E90A6",
  "300": "#555770",
  "400": "#28293D",
  "500": "#000000",
};

export const ExoDarkTheme: GlobalTheme = {
  colors: {
    primary: {
      main: "#254EDA",
      lighter: "#3366FF",
      darker: "#1733A1",
    },
    success: {
      "100": "#065F43",
      "200": "#0B7247",
      "300": "#118D4E",
      "400": "#1AAA52",
      "500": "#23C653",
      "600": "#41A0FC",
      "700": "#70BEFE",
      "800": "#8DD1FE",
      "900": "#B2E4FD",
    },
    warning: {
      "100": "#0C2E78",
      "200": "#134091",
      "300": "#205BB5",
      "400": "#2F7CD8",
      "500": "#41A0FC",
      "600": "#70BEFE",
      "700": "#8DD1FE",
      "800": "#B2E4FD",
      "900": "#D8F3FE",
    },
    pending: {
      "100": "#7A6A0B",
      "200": "#938111",
      "300": "#B6A41C",
      "400": "#DBC72A",
      "500": "#FFEC3A",
      "600": "#FFF16C",
      "700": "#FFF589",
      "800": "#FFF9AF",
      "900": "#FFFCD7",
    },
    danger: {
      "100": "#7A0B2B",
      "200": "#93132C",
      "300": "#B81D2F",
      "400": "#DB2A30",
      "500": "#FF4539",
      "600": "#FF7F6A",
      "700": "#FFA288",
      "800": "#FFC9B1",
      "900": "#FFE6D7",
    },
    text: {
      light: lightColor,
      dark: darkColor,
    },
    background: {
      light: lightColor,
      dark: darkColor,
    },
  },
  ...themeBase,
};
