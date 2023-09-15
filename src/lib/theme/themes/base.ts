import { GlobalTheme } from "../types";

export const themeBase: Pick<GlobalTheme, "fonts"> = {
  fonts: {
    display1: { fontSize: "4rem", fontWeight: "700" },
    display2: { fontSize: "3.5rem", fontWeight: "400" },
    headline1: { fontSize: "2.5rem", fontWeight: "700" },
    headline2: { fontSize: "2rem", fontWeight: "700" },
    headline3: { fontSize: "1.75rem", fontWeight: "700" },
    headline4: { fontSize: "1.5rem", fontWeight: "700" },
    headline5: { fontSize: "1.25rem", fontWeight: "700" },
    headline6: { fontSize: "1rem", fontWeight: "700" },
    lead: { fontSize: "0.875rem", fontWeight: "700" },
    body1: { fontSize: "1rem", fontWeight: "400" },
    body2: { fontSize: "0.875rem", fontWeight: "400" },
    blockquote: { fontSize: "1.25rem", fontWeight: "600" },
    capitalized: { fontSize: "0.875rem", fontWeight: "600" },
    small: { fontSize: "0.75rem", fontWeight: "400" },
    tiny: { fontSize: "0.625rem", fontWeight: "600" },
  },
};
