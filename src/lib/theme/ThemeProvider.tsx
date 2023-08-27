import { PropsWithChildren } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ExoLightTheme } from "./exo-light";
import { ExoDarkTheme } from "./exo-dark";
import { GlobalTheme } from "./types";

interface ThemeProviderProps {
  lightTheme?: GlobalTheme;
  darkTheme?: GlobalTheme;
  isDarkMode?: boolean;
}

export function ThemeProvider({ children, lightTheme = ExoLightTheme, darkTheme = ExoDarkTheme, isDarkMode }: PropsWithChildren<ThemeProviderProps>) {
  return <EmotionThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>{children}</EmotionThemeProvider>;
}
