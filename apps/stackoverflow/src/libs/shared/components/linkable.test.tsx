import { render, screen } from "@testing-library/react";
import { Linkable } from "./linkable";

describe("CLinkable", () => {
  describe("with href", () => {
    test("base", () => {
      render(<Linkable href="/home">Home</Linkable>);
      expect(screen.getByText("Home").tagName).toBe("A");
    });

    test("className and style", () => {
      const className = "text-red-500";
      const style = { color: "red" };
      render(
        <Linkable className={className} href="/" style={style}>
          Home
        </Linkable>,
      );

      const el = screen.getByText("Home");
      expect(el.className).toBe(className);
      expect(el.style.color).toBe("red");
    });
  });

  describe("without href", () => {
    test("base", async () => {
      render(<Linkable>Home</Linkable>);
      expect(screen.getByText("Home").tagName).not.toBe("A");
    });

    test("className and style", () => {
      const className = "text-red-500";
      const style = { color: "red" };
      render(
        <Linkable className={className} style={style}>
          <div>Home</div>
        </Linkable>,
      );

      const el = screen.getByText("Home");
      expect(el.className).toBe(className);
      expect(el.style.color).toBe("red");
    });
  });
});
