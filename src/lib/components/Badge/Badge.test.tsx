import { act, fireEvent, render } from "@/tests";
import { Badge } from ".";

describe("Badge", () => {
  const icon = "https://some-invalid-url/img.jpg";

  test("Should render with required properties", () => {
    const { getByText } = render(<Badge label="label" />);
    expect(getByText("label")).toBeInTheDocument();
  });

  test("Should display icon when valid icon url passed", async () => {
    const { getByRole, getByText } = render(
      <Badge label="label" icon={icon} />,
    );

    const img = getByRole("img", { hidden: true });
    act(() => {
      fireEvent.load(img);
    });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", icon);
    expect(getByText("label")).toBeInTheDocument();
  });

  test("Should display initials when invalid image url passed", async () => {
    const { getByRole, getByText } = render(
      <Badge label="label" icon={icon} />,
    );

    const img = getByRole("img", { hidden: true });
    act(() => {
      fireEvent.error(img);
    });
    expect(img).toHaveStyle({ display: "none" });
    expect(getByText("label")).toBeInTheDocument();
  });

  test("Should use provided alt text for icon", async () => {
    const altText = "warning";
    const { getByRole } = render(<Badge icon={icon} alt={altText} />);

    const img = getByRole("img", { hidden: true });
    act(() => {
      fireEvent.load(img);
    });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("alt", altText);
  });
});
