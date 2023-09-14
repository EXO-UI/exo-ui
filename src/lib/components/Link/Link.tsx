import styled from "@emotion/styled";
import { AnchorHTMLAttributes } from "react";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const StyledLink = styled.a<LinkProps>`
	font-size: 14px;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.primary.main};

	cursor: default;
	border-radius: 4px;
	padding: 4px 4px;

	&:hover {
		color: ${({ theme }) => theme.colors.primary.lighter};
	}

	&:focus,
	&:active {
		background-color: ${({ theme }) => theme.colors.background.light[500]};
	}

	&:focus {
		outline: none;
	}
`;

export function Link({ children, ...props }: Partial<LinkProps>) {
	return <StyledLink {...props}>{children}</StyledLink>;
}
