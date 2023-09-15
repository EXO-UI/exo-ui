import styled from "@emotion/styled";

type AvatarSizes = "extra large" | "large" | "medium" | "small" | "tiny";
type AvatarStatus = "online" | "offline";

export interface AvatarProps {
  name: string;
  size: AvatarSizes;
  image?: string;
  status?: AvatarStatus;
}

const diameter: { [key in AvatarSizes]: string } = {
  "extra large": "80px",
  large: "64px",
  medium: "48px",
  small: "32px",
  tiny: "16px",
};

const fontSize: { [key in AvatarSizes]: string } = {
  "extra large": "1.75rem",
  large: "1.4rem",
  medium: "1.05rem",
  small: "0.7rem",
  tiny: "0.35rem",
};

const fontWeight: { [key in AvatarSizes]: string } = {
  "extra large": "800",
  large: "800",
  medium: "700",
  small: "700",
  tiny: "600",
};

const StyledAvatar = styled.div<AvatarProps>`
  --size: ${({ size }) => diameter[size]};
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background.light[400]};
  cursor: default;

  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${({ size }) => fontSize[size]};
  font-weight: ${({ size }) => fontWeight[size]};

  display: grid;
  place-items: center;
  position: relative;
`;

const StatusIndicatior = styled.div<Pick<AvatarProps, "status">>`
  --size: 15%;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: ${({ status, theme }) =>
    status === "online" ? theme.colors.success[500] : theme.colors.danger[500]};

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
  name,
  size = "extra large",
  image,
  status,
}: AvatarProps) {
  const [firstName, surname] = name.split(" ");
  const initials = (firstName[0] + (surname ? surname[0] : "")).toUpperCase();
  return (
    <StyledAvatar size={size} name={name} image={image}>
      {image ? <AvatarImage src={image} alt="avatar"></AvatarImage> : initials}
      {status ? (
        <StatusIndicatior status={status} role="status"></StatusIndicatior>
      ) : null}
    </StyledAvatar>
  );
}
