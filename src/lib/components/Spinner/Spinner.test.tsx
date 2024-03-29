import { render } from "@/tests";
import { Spinner } from "./Spinner";
import { sizes } from "./consts";

describe("Spinner", () => {
  it("should render correct amount of lines", () => {
    const { getAllByTestId } = render(<Spinner />);

    expect(getAllByTestId("spinner-line")).toHaveLength(8);
  });

  it("should render predefined sizes correctly", () => {
    const { getByTestId } = render(<Spinner size="small" />);

    expect(getByTestId("spinner-container")).toHaveStyle(
      `width: ${sizes.small}px; height: ${sizes.small}px`,
    );
  });

  it("should render custom size correctly", () => {
    const { getByTestId } = render(<Spinner size={100} />);

    expect(getByTestId("spinner-container")).toHaveStyle(
      "width: 100px; height: 100px;",
    );
  });

  it("should render variant correctly", () => {
    const { getAllByTestId } = render(<Spinner variant="primary" />);

    expect(getAllByTestId("spinner-line")[0]).toHaveStyleRule(
      "background",
      "#3366FF",
    );
  });
});
