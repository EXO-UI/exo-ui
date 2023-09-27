import { fireEvent, render } from "@/tests";
import { Avatar } from ".";
import { act } from "react-dom/test-utils";

describe("Avatar", () => {
  test("Should render with required properties", () => {
    const { getByText } = render(<Avatar initials="HR" size="small" />);
    expect(getByText("HR")).toBeInTheDocument();
  });

  test("Should display image when valid image url passed", async () => {
    const url =
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6q1sSJClIv9OuONIcOpFFQUAlbIr6g94oMgsYZp58wkIjaXGF";
    const { getByRole } = render(<Avatar image={url} />);

    const img = getByRole("img", { hidden: true });
    act(() => {
      fireEvent.load(img);
    });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", url);
  });

  test("Should display initials when invalid image url passed", async () => {
    const url = "https://some-invalid-url/img.jpg";
    const { getByRole, getByText } = render(
      <Avatar initials="INITIALS" image={url} />,
    );

    const img = getByRole("img", { hidden: true });
    act(() => {
      fireEvent.error(img);
    });
    expect(img).toHaveStyle({ display: "none" });
    expect(getByText("INITIALS")).toBeInTheDocument();
  });

  test("Should display status indication when status provided", () => {
    const { getByRole } = render(<Avatar status="active" />);
    expect(getByRole("status")).toBeInTheDocument();
  });

  test("Should use provided alt text for image", async () => {
    const url =
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6q1sSJClIv9OuONIcOpFFQUAlbIr6g94oMgsYZp58wkIjaXGF";
    const altText = "Daniel's avatar";
    const { getByRole } = render(<Avatar image={url} alt={altText} />);

    const img = getByRole("img", { hidden: true });
    act(() => {
      fireEvent.load(img);
    });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("alt", altText);
  });
});
