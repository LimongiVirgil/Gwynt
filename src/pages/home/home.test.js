import Home from "./Home";
import { render } from "@testing-library/react";

describe("Home page", () => {
  it('should render home page', () => {
    render(<Home />);
  })
})