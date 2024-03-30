import { fireEvent, render } from "@/tests";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  test("Should render text and children", () => {
    const { getByText } = render(<Tooltip text="Tooltip text">Hello</Tooltip>);

    expect(getByText("Hello")).toBeInTheDocument();
  });

  test("Should be hidden by default", () => {
    const { getByTestId } = render(
      <Tooltip text="Tooltip text">Hello</Tooltip>,
    );

    expect(getByTestId("tooltip-container")).toHaveAttribute("hidden");
  });

  test("Should show tooltip on hover or focus and hide on mouse leave or blur", () => {
    const { getByText, getByTestId } = render(
      <Tooltip text="Tooltip text">Hello</Tooltip>,
    );

    const childElem = getByText("Hello");

    // Hover
    fireEvent.mouseEnter(childElem);
    expect(getByTestId("tooltip-container")).not.toHaveAttribute("hidden");
    fireEvent.mouseLeave(childElem);
    expect(getByTestId("tooltip-container")).toHaveAttribute("hidden");
    // Focus & Blur
    fireEvent.focus(childElem);
    expect(getByTestId("tooltip-container")).not.toHaveAttribute("hidden");
    fireEvent.blur(childElem);
    expect(getByTestId("tooltip-container")).toHaveAttribute("hidden");
  });
});
