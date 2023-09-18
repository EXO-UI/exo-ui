import styled from "@emotion/styled";
import { useEffect, useState } from "react";

type AvatarSizes = "extraLarge" | "large" | "medium" | "small" | "tiny";
type AvatarStatus = "active" | "inactive";

export interface AvatarProps {
  initials: string;
  size: AvatarSizes;
  image?: string;
  status?: AvatarStatus;
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

  display: grid;
  place-items: center;
  position: relative;
`;

const StatusIndicatior = styled.div<Pick<AvatarProps, "status">>`
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

export function Avatar({
  initials,
  size = "extraLarge",
  image,
  status,
}: AvatarProps) {
  const [isImageValid, setIsImageValid] = useState(false);

  useEffect(() => {
    if (image) {
      new Promise<boolean>((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image;
        loadImg.onload = () => {
          return resolve(loadImg.complete && loadImg.naturalWidth > 1);
        };
        loadImg.onerror = () => {
          return reject(false);
        };
      })
        .then(isValid => {
          setIsImageValid(isValid);
        })
        .catch(() => {
          setIsImageValid(false);
        });
    }
  }, [image]);

  return (
    <StyledAvatar size={size}>
      {isImageValid ? <AvatarImage src={image} alt="avatar" /> : initials}
      {status && <StatusIndicatior status={status} role="status" />}
    </StyledAvatar>
  );
}
