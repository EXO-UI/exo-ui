import { PropsWithChildren } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ExoLightTheme } from "../themes/exo-light";
import { ExoDarkTheme } from "../themes/exo-dark";
import { GlobalTheme } from "../types";

interface ThemeProviderProps {
  lightTheme?: GlobalTheme;
  darkTheme?: GlobalTheme;
  isDarkMode?: boolean;
}

export function ThemeProvider({ children, lightTheme = ExoLightTheme, darkTheme = ExoDarkTheme, isDarkMode }: PropsWithChildren<ThemeProviderProps>) {
  return <EmotionThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>{children}</EmotionThemeProvider>;
}
