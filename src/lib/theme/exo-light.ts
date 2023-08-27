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

export const ExoLightTheme: GlobalTheme = {
  colors: {
    primary: {
      main: "#3366FF",
      lighter: "#6690FF",
      darker: "#254EDA",
    },
    success: {
      "100": "#D6FDD1",
      "200": "#A7F9A7",
      "300": "#78ED84",
      "400": "#54DC6E",
      "500": "#23C653",
      "600": "#1AAA52",
      "700": "#118D4E",
      "800": "#0B7247",
      "900": "#065F43",
    },
    warning: {
      "100": "#D8F3FE",
      "200": "#B2E4FD",
      "300": "#8DD1FE",
      "400": "#70BEFE",
      "500": "#41A0FC",
      "600": "#2F7CD8",
      "700": "#205BB5",
      "800": "#134091",
      "900": "#0C2E78",
    },
    pending: {
      "100": "#FFFCD7",
      "200": "#FFF9AF",
      "300": "#FFF589",
      "400": "#FFF16C",
      "500": "#FFEC3A",
      "600": "#DBC72A",
      "700": "#B6A41C",
      "800": "#938111",
      "900": "#7A6A0B",
    },
    danger: {
      "100": "#FFE6D7",
      "200": "#FFC9B1",
      "300": "#FFA288",
      "400": "#FF7F6A",
      "500": "#FF4539",
      "600": "#DB2A30",
      "700": "#B81D2F",
      "800": "#93132C",
      "900": "#7A0B2B",
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
