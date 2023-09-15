import { HTMLAttributes, useMemo } from "react";
import { TypographyVariant } from "@/lib/theme";
import styled from "@emotion/styled";

type HTMLTextTags =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "blockquote";

export interface TypographyProps
  extends HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  variant: TypographyVariant;
  element: HTMLTextTags;
}

const defaultTags: { [key in TypographyVariant]: HTMLTextTags } = {
  display1: "h1",
  display2: "h1",
  headline1: "h1",
  headline2: "h2",
  headline3: "h3",
  headline4: "h4",
  headline5: "h5",
  headline6: "h6",
  lead: "p",
  body1: "p",
  body2: "p",
  blockquote: "blockquote",
  capitalized: "span",
  small: "p",
  tiny: "p",
};

export function Typography({
  variant = "body1",
  element,
  children,
  ...props
}: Partial<TypographyProps>) {
  const TextElement = useMemo(() => {
    return styled(element || defaultTags[variant])<
      Omit<TypographyProps, "element">
    >`
      margin: 0;
      padding: 0;
      font-size: ${({ variant, theme }) => theme.fonts[variant].fontSize};
      font-weight: ${({ variant, theme }) => theme.fonts[variant].fontWeight};
      text-transform: ${({ variant }) =>
        variant === "capitalized" ? "uppercase" : "none"};
    `;
  }, [element, variant]);

  return (
    <TextElement variant={variant} {...props}>
      {children}
    </TextElement>
  );
}
