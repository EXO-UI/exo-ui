import { render, waitFor } from "@/tests";
import { Avatar } from ".";
import { act } from "react-dom/test-utils";
import { Mock } from "vitest";

describe("Avatar", () => {
  const mockImageInstance = {
    onload: null as (() => true) | null,
    onerror: null as ((error: Error) => void) | null,
    src: "",
    complete: true,
    naturalWidth: 100,
  };

  test("Should render with required propertues", () => {
    const { getByText } = render(<Avatar initials="HR" size="small" />);
    expect(getByText("HR")).toBeInTheDocument();
  });

  test("Should display image when valid image url passed", async () => {
    const mockImageConstructor = vi.fn(() => mockImageInstance);
    (global.Image as Mock) = mockImageConstructor;

    const url =
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6q1sSJClIv9OuONIcOpFFQUAlbIr6g94oMgsYZp58wkIjaXGF";
    const { getByRole } = render(<Avatar initials="" image={url} />);
    act(() => {
      mockImageInstance.onload?.();
    });
    await waitFor(() => {
      const img = getByRole("img");
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src", url);
    });
  });

  test("Should display initials when invalid image url passed", async () => {
    mockImageInstance.naturalWidth = 0;
    const mockImageConstructor = vi.fn(() => mockImageInstance);
    (global.Image as Mock) = mockImageConstructor;

    const url = "https://some-invalid-url/img.jpg";
    const { queryByRole } = render(<Avatar initials="" image={url} />);
    act(() => {
      mockImageInstance.onload?.();
    });
    await waitFor(() => {
      const img = queryByRole("img");
      expect(img).not.toBeInTheDocument();
    });
  });

  test("Should display status indication when status provided", () => {
    const { getByRole } = render(<Avatar initials="" status="active" />);
    expect(getByRole("status")).toBeInTheDocument();
  });
});
