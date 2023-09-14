import { render } from "@/tests";
import { Link } from "./Link";

describe("Link", () => {
  test("Should render", () => {
    render(<Link>Link</Link>);
  });

  test("Should pass href param", () => {
    const { getByRole } = render(<Link href="link">Link</Link>);
    expect(getByRole("link")).toHaveAttribute("href", "link");
  });

  test("Should allow download", () => {
    const { getByRole } = render(
      <Link href="link" download>
        Link
      </Link>,
    );
    expect(getByRole("link")).toHaveAttribute("download");
  });

  test("Should pass referrerpolicy param", () => {
    const { getByRole } = render(
      <Link href="link" referrerPolicy="origin">
        Link
      </Link>,
    );
    expect(getByRole("link")).toHaveAttribute("referrerPolicy", "origin");
  });

  test("Should pass target param", () => {
    const { getByRole } = render(
      <Link href="link" target="_parent">
        Link
      </Link>,
    );
    expect(getByRole("link")).toHaveAttribute("target", "_parent");
  });
});
