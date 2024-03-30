import { PropsWithChildren, useState } from "react";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { Typography } from "..";

type TooltipPosition = "top" | "right" | "bottom" | "left";
type TooltipVariant = "default" | "contrast";

interface TooltipProps {
  text: string;
  position?: TooltipPosition;
  variant?: TooltipVariant;
}

const getTooltipPosition = (position: TooltipPosition) => {
  if (position === "top")
    return css`
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
    `;
  if (position === "right")
    return css`
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
    `;
  if (position === "bottom")
    return css`
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    `;
  if (position === "left")
    return css`
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
    `;
};

const inAnimation = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
`;

const outAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
`;

const TooltipWrapper = styled.div`
  position: relative;
  z-index: 99;
`;

const TooltipContainer = styled.div<{
  position: TooltipPosition;
  visible: boolean;
}>`
  position: absolute;
  ${({ position }) => getTooltipPosition(position)};
  z-index: 100;
  padding: 4px;

  animation: ${({ visible }) => (visible ? inAnimation : outAnimation)} 0.2s;
  animation-fill-mode: forwards;
`;

const TooltipContent = styled.div<{ variant: TooltipVariant }>`
  width: max-content;
  max-width: 300px;

  color: ${({ theme, variant }) =>
    variant === "contrast"
      ? theme.colors.text.light[100]
      : theme.colors.text.dark[400]};
  background-color: ${({ theme, variant }) =>
    variant === "contrast"
      ? theme.colors.background.dark[400]
      : theme.colors.background.light[100]};

  padding: 4px;
  border-radius: 2px;
`;

export function Tooltip({
  children,
  text,
  position = "right",
  variant = "default",
}: PropsWithChildren<TooltipProps>) {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <TooltipWrapper
      onFocusCapture={showTooltip}
      onBlurCapture={hideTooltip}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      <TooltipContainer
        hidden={!isVisible}
        visible={isVisible}
        position={position}
        data-testid="tooltip-container"
      >
        <TooltipContent variant={variant}>
          <Typography variant="small">{text}</Typography>
        </TooltipContent>
      </TooltipContainer>
    </TooltipWrapper>
  );
}
