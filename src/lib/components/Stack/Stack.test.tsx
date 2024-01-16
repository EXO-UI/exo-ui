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

    // emotion removes unusable spaces from strings
    expect(getByText("Some content")).toHaveStyle(
      // TODO: fix this weird condition - use some emotion tools https://emotion.sh/docs/@emotion/jest
      `box-shadow: ${boxShadows[2].replace(/,\s*0px/g, ",0px")}`,
    );
  });
});
