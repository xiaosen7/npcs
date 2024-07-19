import { createTheme } from "@/index";
import { ISyncElementClass, IToggleTheme, IUseTheme } from "@/shared";

import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";

enum ETheme {
  Light = "light",
  Dark = "dark",
}

describe("createTheme", () => {
  let SyncElementClass: ISyncElementClass;
  let useTheme: IUseTheme;
  let ToggleTheme: IToggleTheme;
  const DEFAULT_VALUE = ETheme.Dark;
  const DARK_ICON = "🌙";
  const LIGHT_ICON = "☀️";
  const ui = [
    {
      icon: DARK_ICON,
      value: ETheme.Dark,
    },
    {
      icon: LIGHT_ICON,
      value: ETheme.Light,
    },
  ];
  const DEFAULT_INDEX = ui.findIndex(({ value }) => value === DEFAULT_VALUE);
  const DEFAULT_ICON = ui[DEFAULT_INDEX].icon;

  test("should create the theme with options", () => {
    const theme = createTheme({
      defaultValue: DEFAULT_VALUE,
      ui: [],
    });

    expect(theme).toHaveProperty("ToggleTheme");
    expect(theme).toHaveProperty("SyncElementClass");
    expect(theme).toHaveProperty("useTheme");
  });

  beforeEach(() => {
    const result = createTheme({
      defaultValue: DEFAULT_VALUE,
      ui,
    });

    SyncElementClass = result.SyncElementClass;
    useTheme = result.useTheme;
    ToggleTheme = result.ToggleTheme;
  });

  describe("useTheme", () => {
    test("should set the initial theme", () => {
      const { result } = renderHook(useTheme);
      const theme = result.current;
      expect(theme.value).toEqual(DEFAULT_VALUE);
    });

    test("should update the theme when setTheme is called", () => {
      const { result: themeRef } = renderHook(useTheme);

      act(() => {
        themeRef.current.set(ETheme.Light);
      });
      expect(themeRef.current.value).toEqual(ETheme.Light);
    });

    test("should toggle next", () => {
      const { result: themeRef } = renderHook(useTheme);

      act(() => {
        themeRef.current.set(ETheme.Light);
      });
      expect(themeRef.current.value).toEqual(ETheme.Light);

      act(() => {
        themeRef.current.toggle();
      });
      expect(themeRef.current.value).toEqual(ETheme.Dark);
    });
  });

  describe("SyncDocumentClass", () => {
    test("should render the SyncDocumentClass component", () => {
      render(
        <p id="p">
          <SyncElementClass
            getContainer={() => document.getElementById("p")!}
          />
        </p>,
      );
      expect(screen.getByRole("paragraph")).toHaveClass(DEFAULT_VALUE);
    });

    test("should remove the old theme class and add the new theme class on theme change", () => {
      const { result: themeRef } = renderHook(useTheme);

      render(
        <p id="p">
          <SyncElementClass
            getContainer={() => document.getElementById("p")!}
          />
        </p>,
      );

      expect(screen.getByRole("paragraph")).toHaveClass(ETheme.Dark);

      act(() => {
        themeRef.current.set(ETheme.Light);
      });
      expect(screen.getByRole("paragraph")).toHaveClass(ETheme.Light);
      expect(screen.getByRole("paragraph")).not.toHaveClass(ETheme.Dark);
    });
  });

  describe("ToggleTheme", () => {
    test("should render the Initial icon", () => {
      const container = render(
        <p id="p">
          <ToggleTheme />
        </p>,
      );
      expect(container.getByText(DEFAULT_ICON)).toBeInTheDocument();
    });

    test("should toggle", () => {
      const { result: themeRef } = renderHook(useTheme);

      act(() => {
        themeRef.current.set(ETheme.Dark);
      });

      const container = render(
        <p id="p">
          <ToggleTheme />
        </p>,
      );
      expect(container.getByText(DARK_ICON)).toBeInTheDocument();
      expect(container.queryByText(LIGHT_ICON)).toBeNull();

      fireEvent.click(container.getByText(DARK_ICON));

      expect(container.getByText(LIGHT_ICON)).toBeInTheDocument();
      expect(container.queryByText(DARK_ICON)).toBeNull();
    });
  });
});
