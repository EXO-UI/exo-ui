import { fireEvent, render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("Call onClick callback", () => {
    const mockFn = vi.fn();

    const { getByText } = render(<Button onClick={mockFn} />);
    const btnElem = getByText("Click me");

    fireEvent.click(btnElem);

    expect(mockFn).toBeCalledTimes(1);
  });
});
