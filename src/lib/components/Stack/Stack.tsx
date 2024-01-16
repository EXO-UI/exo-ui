import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { boxShadows } from "./consts";

export type levelType = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface StackBoxProps {
  level?: levelType;
}

export function StackBox({
  level = 0,
  children,
}: PropsWithChildren<StackBoxProps>) {
  return (
    <div
      css={css`
        box-shadow: ${boxShadows[level]};
        border-radius: 8px;
      `}
    >
      {children}
    </div>
  );
}
