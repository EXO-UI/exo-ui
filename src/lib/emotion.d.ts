import "@emotion/react";
import { GlobalTheme } from "./theme";

declare module "@emotion/react" {
  export interface Theme extends GlobalTheme {}
}
