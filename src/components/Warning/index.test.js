import Warning from "./Warning";
import { render, fireEvent, screen } from "@testing-library/react";

describe("Warning message", () => {
  it('should close component', () => {
    render(<Warning />);

    const closeButton = screen.getByTestId("close-icon");
    const componentWrapper = screen.getByTestId("warning-wrapper");

    fireEvent.click(closeButton);

    const styles = getComputedStyle(componentWrapper);

    expect(styles.display).toBe("none");
  })
})