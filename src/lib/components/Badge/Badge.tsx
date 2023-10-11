import styled from "@emotion/styled";
import { useState } from "react";

type BadgeSize = "small" | "default";

export interface BadgeProps {
  icon: string;
  reverse: boolean;
  label: string;
  size: BadgeSize;
}

const badgeHeight = {
  default: "24px",
  small: "16px",
};

const StyledBadge = styled.div<Pick<BadgeProps, "reverse" | "size">>`
  display: flex;
  ${({ reverse }) => reverse && "flex-direction: row-reverse;"}
  height: ${({ size }) => badgeHeight[size]};
  border-radius: ${({ size }) => (size === "default" ? "4px" : "2px")};

  background-color: ${({ theme }) => theme.colors.background.dark[200]};
`;

const BadgeIconWrapper = styled.div<Pick<BadgeProps, "size">>`
  place-items: center;
  width: ${({ size }) => badgeHeight[size]};
  height: 100%;
`;

const iconSize = {
  default: "16px",
  small: "12px",
};

const BadgeIcon = styled.img<Pick<BadgeProps, "size">>`
  width: ${({ size }) => iconSize[size]};
  height: ${({ size }) => iconSize[size]};
`;

const StyledLabel = styled.div<Pick<BadgeProps, "size">>`
  color: ${({ theme }) => theme.colors.text.light[300]};
  font-size: ${({ size }) => (size === "default" ? "12px" : "10px")};
  font-weight: 500;

  padding: ${({ size }) => (size === "default" ? "4px 8px" : "1px 4px")};
`;

export function Badge({
  icon,
  reverse = false,
  label,
  size = "default",
}: Partial<BadgeProps>) {
  const [isIconLoaded, setIsIconLoaded] = useState(false);

  const handleIconLoad = () => {
    setIsIconLoaded(true);
  };
  const handleIconError = () => {
    setIsIconLoaded(false);
  };

  return (
    <StyledBadge reverse={reverse} size={size}>
      {icon && (
        <BadgeIconWrapper
          size={size}
          style={{ display: isIconLoaded ? "grid" : "none" }}
          data-testid="badge-icon-wrapper"
        >
          <BadgeIcon
            src={icon}
            alt="Badge Icon"
            size={size}
            onLoad={handleIconLoad}
            onError={handleIconError}
          />
        </BadgeIconWrapper>
      )}
      <StyledLabel size={size}>{label}</StyledLabel>
    </StyledBadge>
  );
}
