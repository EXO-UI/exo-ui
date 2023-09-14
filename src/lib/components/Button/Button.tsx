import { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";

type ButtonVariants =
  | "default"
  | "outlined"
  | "rounded"
  | "rounded-outlined"
  | "icon";
type ButtonSizes = "small" | "medium" | "large";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants;
  size: ButtonSizes;
  Icon?: ReactNode;
  reverse?: boolean;
}

const paddings: { [key in ButtonSizes]: number } = {
  small: 4,
  medium: 8,
  large: 12,
};

const OUTLINED: ButtonVariants[] = ["outlined", "rounded-outlined"];
const ROUNDED: ButtonVariants[] = ["rounded", "rounded-outlined"];

const StyledButton = styled.button<ButtonProps>`
  font-size: ${({ size }) => (size === "small" ? "12px" : "14px")};
  color: ${({ theme, variant }) =>
    OUTLINED.includes(variant)
      ? theme.colors.primary.main
      : theme.colors.text.light[100]};
  font-weight: 500;

  background-color: ${({ theme, variant }) =>
    !OUTLINED.includes(variant) ? theme.colors.primary.main : "transparent"};
  border: ${({ theme, variant }) =>
    OUTLINED.includes(variant)
      ? `2px solid ${theme.colors.primary.main}`
      : "none"};
  border-radius: ${({ variant }) =>
    ROUNDED.includes(variant) ? "100px" : "4px"};

  padding: ${({ size, variant }) =>
    variant === "icon"
      ? `${paddings[size]}px`
      : `${paddings[size]}px ${paddings[size] * 2}px`};

  &:hover {
    background-color: ${({ theme, variant }) =>
      !OUTLINED.includes(variant) && theme.colors.primary.lighter};
    border-color: ${({ theme }) => theme.colors.primary.lighter};
    color: ${({ theme, variant }) =>
      OUTLINED.includes(variant) && theme.colors.primary.lighter};
  }

  &:focus {
    background-color: ${({ theme, variant }) =>
      !OUTLINED.includes(variant) && theme.colors.primary.darker};
    border: ${({ theme, variant }) =>
      `2px solid ${
        OUTLINED.includes(variant)
          ? theme.colors.primary.darker
          : theme.colors.primary.lighter
      }`};
    color: ${({ theme, variant }) =>
      OUTLINED.includes(variant) && theme.colors.primary.darker};
    outline: none;
  }

  &:active {
    background-color: ${({ theme, variant }) =>
      !OUTLINED.includes(variant) && theme.colors.primary.lighter};
    border-color: ${({ theme }) => theme.colors.primary.lighter};
    color: ${({ theme, variant }) =>
      OUTLINED.includes(variant) && theme.colors.primary.lighter};
  }

  &:disabled {
    background-color: ${({ theme, variant }) =>
      !OUTLINED.includes(variant) && theme.colors.background.light[500]};
    border-color: ${({ theme }) => theme.colors.background.light[500]};
    color: ${({ theme, variant }) =>
      OUTLINED.includes(variant) && theme.colors.background.light[500]};
  }
`;

const StyledInner = styled.div<Pick<ButtonProps, "reverse" | "variant">>`
  display: flex;
  gap: 12px;
  ${({ reverse }) => reverse && "flex-direction: row-reverse;"}
  align-items: center;
  max-height: 32px;
`;

export function Button({
  children,
  variant = "default",
  size = "medium",
  Icon,
  reverse,
  ...props
}: Partial<ButtonProps>) {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      <StyledInner reverse={reverse} variant={variant}>
        {children}
        {Icon}
      </StyledInner>
    </StyledButton>
  );
}
