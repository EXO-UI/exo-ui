import { PropsWithChildren } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ExoLightTheme } from "./exo-light";
import { GlobalTheme } from "./types";

interface ThemeProviderProps {
  theme?: GlobalTheme;
}

export function ThemeProvider({ children, theme = ExoLightTheme }: PropsWithChildren<ThemeProviderProps>) {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
}
