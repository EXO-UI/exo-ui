import { fireEvent, render } from "@/tests";
import { Button } from "./Button";

describe("Button", () => {
  test("Should call onClick callback", () => {
    const mockFn = vi.fn();

    const { getByText } = render(<Button onClick={mockFn}>Click me</Button>);

    const btnElem = getByText("Click me");
    fireEvent.click(btnElem);

    expect(mockFn).toBeCalledTimes(1);
  });

  test("Should not call onClick callback when disabled", () => {
    const mockFn = vi.fn();

    const { getByText } = render(
      <Button onClick={mockFn} disabled>
        Click me
      </Button>
    );

    const btnElem = getByText("Click me");
    fireEvent.click(btnElem);

    expect(mockFn).not.toBeCalled();
  });

  test("Should render icon when provided", () => {
    const { getByTestId } = render(<Button Icon={<div data-testid="icon" />} />);
    const iconElem = getByTestId("icon");

    expect(iconElem).toBeInTheDocument();
  });
});
