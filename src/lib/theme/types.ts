// Color types
type ColorBrightness =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

type Color = {
  [key in ColorBrightness]: string;
};

type PartialColor = Omit<Color, "600" | "700" | "800" | "900">;

// Font types
export type TypographyVariant =
  | "display1"
  | "display2"
  | "headline1"
  | "headline2"
  | "headline3"
  | "headline4"
  | "headline5"
  | "headline6"
  | "lead"
  | "body1"
  | "body2"
  | "blockquote"
  | "capitalized"
  | "small"
  | "tiny";

// Theme types
export interface GlobalTheme {
  colors: {
    primary: {
      main: string;
      lighter: string;
      darker: string;
    };
    success: Color;
    warning: Color;
    pending: Color;
    danger: Color;
    text: {
      light: PartialColor;
      dark: PartialColor;
    };
    background: {
      light: PartialColor;
      dark: PartialColor;
    };
  };
  fonts: {
    [key in TypographyVariant]: {
      fontSize: string;
      fontWeight: string;
    };
  };
}
