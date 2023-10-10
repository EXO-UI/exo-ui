import styled from "@emotion/styled";
import { useState } from "react";

type BadgeSize = "small" | "large";

export interface BadgeProps {
  icon: string;
  alt: string;
  reverse: boolean;
  label: string;
  size: BadgeSize;
}

const badgeHeight = {
  large: "24px",
  small: "16px",
};

const StyledBadge = styled.div<Pick<BadgeProps, "reverse" | "size">>`
  display: flex;
  ${({ reverse }) => reverse && "flex-direction: row-reverse;"}
  height: ${({ size }) => badgeHeight[size]};
  border-radius: ${({ size }) => (size === "large" ? "4px" : "2px")};

  background-color: ${({ theme }) => theme.colors.background.dark[200]};
`;

const BadgeIconWrapper = styled.div<Pick<BadgeProps, "size">>`
  display: grid;
  place-items: center;
  width: ${({ size }) => badgeHeight[size]};
  height: 100%;
`;

const iconSize = {
  large: "12px",
  small: "8px",
};

const BadgeIcon = styled.img<Pick<BadgeProps, "size">>`
  width: ${({ size }) => iconSize[size]};
  height: ${({ size }) => iconSize[size]};
`;

const StyledLabel = styled.div<Pick<BadgeProps, "size">>`
  color: #f0f0f0;
  font-size: ${({ size }) => (size === "large" ? "12px" : "10px")};
  font-weight: 500;

  padding: ${({ size }) => (size === "large" ? "4px 8px" : "1px 4px")};
`;

export function Badge({
  icon,
  alt = "badge",
  reverse = false,
  label,
  size = "large",
}: Partial<BadgeProps>) {
  const [isIconLoaded, setIsIconLoaded] = useState(false);

  const handleIconLoad = () => {
    console.log("load");
    setIsIconLoaded(true);
  };
  const handleIconError = () => {
    console.log("error");
    setIsIconLoaded(false);
  };

  return (
    <StyledBadge reverse={reverse} size={size}>
      {icon && (
        <BadgeIconWrapper size={size}>
          <BadgeIcon
            src={icon}
            alt={alt}
            size={size}
            onLoad={handleIconLoad}
            onError={handleIconError}
            style={{ display: isIconLoaded ? "block" : "none" }}
          />
        </BadgeIconWrapper>
      )}
      <StyledLabel size={size}>{label}</StyledLabel>
    </StyledBadge>
  );
}
