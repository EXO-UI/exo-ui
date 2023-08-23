import { css } from "@emotion/react";

interface ButtonProps {
  onClick(): void;
}

const styles = css`
  color: #fafafa;
  background: #000000;
`;

export function Button({ onClick }: ButtonProps) {
  return (
    <button css={styles} onClick={onClick}>
      Click me
    </button>
  );
}
