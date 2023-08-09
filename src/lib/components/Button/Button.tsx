interface ButtonProps {
  onClick(): void;
}

export function Button({ onClick }: ButtonProps) {
  return <button onClick={onClick}>On click</button>;
}
