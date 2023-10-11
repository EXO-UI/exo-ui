import styled from "@emotion/styled";
import { useState } from "react";

type AvatarSizes = "extraLarge" | "large" | "medium" | "small" | "tiny";
type AvatarStatus = "active" | "inactive";

export interface AvatarProps {
  initials: string;
  size: AvatarSizes;
  image: string;
  alt: string;
  status: AvatarStatus;
}

const sizes: { [key in AvatarSizes]: string } = {
  extraLarge: "80px",
  large: "64px",
  medium: "48px",
  small: "32px",
  tiny: "16px",
};

const fontSize: { [key in AvatarSizes]: string } = {
  extraLarge: "1.75rem",
  large: "1.4rem",
  medium: "1.05rem",
  small: "0.7rem",
  tiny: "0.35rem",
};

const StyledAvatar = styled.div<Pick<AvatarProps, "size">>`
  width: ${({ size }) => sizes[size]};
  height: ${({ size }) => sizes[size]};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background.light[400]};
  cursor: default;

  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${({ size }) => fontSize[size]};
  font-weight: 800;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  display: grid;
  place-items: center;
`;

const StatusIndicator = styled.div<Pick<AvatarProps, "status">>`
  width: 15%;
  height: 15%;
  border-radius: 50%;
  background-color: ${({ status, theme }) =>
    status === "active" ? theme.colors.success[500] : theme.colors.danger[500]};

  position: absolute;
  bottom: 8%;
  right: 8%;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const AvatarWrapper = styled.div`
  position: relative;
`;

export function Avatar({
  initials,
  size = "extraLarge",
  image,
  alt = "avatar",
  status,
}: Partial<AvatarProps>) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  const handleImageError = () => {
    setIsImageLoaded(false);
  };

  return (
    <AvatarWrapper>
      <StyledAvatar size={size}>
        <AvatarImage
          src={image}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ display: isImageLoaded ? "block" : "none" }}
          alt={alt}
        />
        {!isImageLoaded && initials}
      </StyledAvatar>
      {status && <StatusIndicator status={status} role="status" />}
    </AvatarWrapper>
  );
}
