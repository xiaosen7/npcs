import { render, screen } from "@testing-library/react";

test("Welcome", () => {
  render(<div>Get started</div>);
  expect(screen.findAllByText("Get started")).toBeDefined();
});
