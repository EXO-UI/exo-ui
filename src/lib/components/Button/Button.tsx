interface ButtonProps {
  onClick(): void;
}

export function Button({ onClick }: ButtonProps) {
  return (
    <button style={{ color: "black" }} onClick={onClick}>
      Click me
    </button>
  );
}
