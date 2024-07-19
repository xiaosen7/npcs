import { IOptions } from "@/shared";
import { createStore } from "@/store";

enum ETheme {
  Light = "light",
  Dark = "dark",
}

describe("createStore", () => {
  let store: ReturnType<typeof createStore>;

  beforeEach(() => {
    const options: IOptions<string> = {
      defaultValue: ETheme.Dark,
      ui: [
        {
          icon: "🌙",
          value: ETheme.Dark,
        },
        {
          icon: "☀️",
          value: ETheme.Light,
        },
      ],
    };

    store = createStore(options);
  });

  test("should set the initial value", () => {
    expect(store.getState().value).toEqual(ETheme.Dark);
  });

  test("should update the value on set", () => {
    store.getState().set(ETheme.Dark);
    expect(store.getState().value).toEqual(ETheme.Dark);
  });

  test("should toggle the value", () => {
    store.getState().set(ETheme.Dark);
    store.getState().toggle();
    expect(store.getState().value).toEqual(ETheme.Light);
    store.getState().toggle();
    expect(store.getState().value).toEqual(ETheme.Dark);
  });

  test("should get the index", () => {
    expect(store.getState().getIndex()).toBe(0);

    store.getState().setIndex(1);
    expect(store.getState().getIndex()).toBe(1);
  });

  test("should throw error on invalid index", () => {
    expect(() => store.getState().setIndex(-1)).toThrowError(
      "No icon found for the current index `-1`",
    );
    expect(() => store.getState().setIndex(100)).toThrowError(
      "No icon found for the current index `100`",
    );
  });
});
