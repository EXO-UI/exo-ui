import { render } from "@/tests";
import { Avatar } from ".";

describe("Avatar", () => {
  test("Should render with required propertues", () => {
    const { getByText } = render(<Avatar name={"H R"} size={"small"} />);
    expect(getByText("HR")).toBeInTheDocument();
  });

  test("Should display image when passed", () => {
    const { getByRole } = render(
      <Avatar name={""} size={"small"} image="image_url" />
    );
    const img = getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "image_url");
  });

  test("Should display status indication when status provided", () => {
    const { getByRole } = render(
      <Avatar name={""} size={"small"} status="online" />
    );
    expect(getByRole("status")).toBeInTheDocument();
  });
});
