import { render } from "@/tests";
import { StackBox } from "./Stack";
import { boxShadows } from "./consts";

describe("StackBox", () => {
  test("Should render children", () => {
    const { getByText } = render(<StackBox>Some content</StackBox>);

    expect(getByText("Some content")).toBeInTheDocument();
  });

  test("Should render with default level", () => {
    const { getByText } = render(<StackBox>Some content</StackBox>);

    expect(getByText("Some content")).toHaveStyle({
      boxShadow: boxShadows[0],
    });
  });

  test("Should render with custom level", () => {
    const { getByText } = render(<StackBox level={2}>Some content</StackBox>);

    expect(getByText("Some content")).toHaveStyleRule(
      "box-shadow",
      boxShadows[2].replace(/,\s*0px/g, ",0px"), // emotion removes unused spaces
    );
  });
});
