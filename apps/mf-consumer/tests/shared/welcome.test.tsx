import { Welcome } from "@/libs/shared/components/welcome";
import { render, screen } from "@testing-library/react";

test("Welcome", () => {
  render(<Welcome />);
  expect(screen.findAllByText("Get started")).toBeDefined();
});
