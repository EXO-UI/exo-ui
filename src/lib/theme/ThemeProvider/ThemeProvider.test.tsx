import { render } from "@/tests";
import styled from "@emotion/styled";
import { ThemeProvider } from "./ThemeProvider";
import { ExoLightTheme } from "../themes/exo-light";

const StyledDiv = styled.div`
  color: ${({ theme }) => theme.colors.primary.main};
`;

describe("ThemeProvider", () => {
  const theme = { ...ExoLightTheme, colors: { ...ExoLightTheme.colors, primary: { ...ExoLightTheme.colors.primary, main: "rgb(255, 0, 0)" } } };

  test("renders children with the provided light theme", () => {
    const { getByText } = render(
      <ThemeProvider lightTheme={theme}>
        <StyledDiv>My themed component</StyledDiv>
      </ThemeProvider>
    );

    expect(getByText("My themed component")).toHaveStyle("color: rgb(255, 0, 0)");
  });
  test("renders children with provided dark theme and dark mode enabled", () => {
    const { getByText } = render(
      <ThemeProvider darkTheme={theme} isDarkMode>
        <StyledDiv>My themed component</StyledDiv>
      </ThemeProvider>
    );

    expect(getByText("My themed component")).toHaveStyle("color: rgb(255, 0, 0)");
  });
});
