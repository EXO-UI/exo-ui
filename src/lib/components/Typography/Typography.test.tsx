import { render } from "@/tests";
import { Typography } from "./Typography";

describe("Typography", () => {
  test("Should render the paragraph element by default", () => {
    const { container } = render(<Typography>Hello World</Typography>);
    expect(container.querySelector("p")).toBeInTheDocument();
  });

  test("Should render the correct element based on the variant prop", () => {
    const { container } = render(
      <Typography variant="headline1">Hello World</Typography>,
    );
    expect(container.querySelector("h1")).toBeInTheDocument();
  });

  test("Should render the correct element based on the element prop", () => {
    const { container } = render(
      <Typography variant="body1" element="span">
        Hello World
      </Typography>,
    );
    expect(container.querySelector("span")).toBeInTheDocument();
  });
});
