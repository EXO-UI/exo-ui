/* eslint-disable react-refresh/only-export-components */
import { PropsWithChildren, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { matchers } from "@emotion/jest";
import { ThemeProvider } from "../lib";

// Add custom matchers for testing emotion styles - see https://emotion.sh/docs/@emotion/jest#tohavestylerule
expect.extend({ ...matchers });

function AllTheProviders({ children }: PropsWithChildren<unknown>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
