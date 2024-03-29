import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useMemo } from "react";
import { sizes } from "./consts";

type SpinnerVariants = "default" | "primary";
export type SpinnerSizes = "small" | "medium" | "large";

export interface SpinnerProps {
  variant?: SpinnerVariants;
  size?: SpinnerSizes | number;
}

const SPINNER_LINES_AMOUNT = 8;

const fade = keyframes`
  0% {
    opacity: 0.15;
  }
  100% {
    opacity: 1;
  }
`;

const SpinnerContainer = styled.div<{ dimension: number }>`
  position: relative;
  display: inline-block;
  width: ${({ dimension }) => dimension}px;
  height: ${({ dimension }) => dimension}px;
`;

const Line = styled.div<{ variant: SpinnerVariants }>`
  position: absolute;
  bottom: 0;
  left: calc(50% - 4.5%);

  width: 9%;
  height: 27%;

  border-radius: 100px;

  transform-origin: center -85%;
  animation: ${fade} 1s infinite linear;

  background: ${({ theme, variant }) =>
    variant === "primary"
      ? theme.colors.primary.main
      : theme.colors.background.dark[400]};
`;

const renderLines = (variant: SpinnerVariants) => {
  return Array.from({ length: SPINNER_LINES_AMOUNT }, (_, i) => (
    <Line
      key={i}
      data-testid="spinner-line"
      variant={variant}
      css={css`
        &:nth-of-type(${i + 1}) {
          animation-delay: ${i * 0.125}s;
          transform: rotate(${i * 45}deg);
        }
      `}
    />
  ));
};

export const Spinner: React.FC<SpinnerProps> = ({
  variant = "default",
  size = "medium",
}) => {
  const dimension = typeof size === "number" ? size : sizes[size];
  const lines = useMemo(() => renderLines(variant), [variant]);

  return (
    <SpinnerContainer data-testid="spinner-container" dimension={dimension}>
      {lines}
    </SpinnerContainer>
  );
};
