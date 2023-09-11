/* eslint-disable react-refresh/only-export-components */
import { PropsWithChildren, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "../lib";

function AllTheProviders({ children }: PropsWithChildren<unknown>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
const customRender = (ui: ReactElement, options?: RenderOptions) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
