import { create } from "zustand";
import { IOptions } from "./shared";

interface IStore<T> {
  value: T;
  set: (theme: T) => void;
  toggle: () => void;
  getIndex: () => number;
  setIndex: (index: number) => void;
}

/**
 * @internal
 */
export function createStore<T extends string>(options: IOptions<T>) {
  const { defaultValue, ui } = options;
  return create<IStore<T>>()((set, get) => ({
    value: defaultValue,
    set: (value: T) => set({ value }),
    toggle: () => {
      const nextIndex = (get().getIndex() + 1) % ui.length;
      get().setIndex(nextIndex);
    },
    getIndex() {
      const { value } = get();
      const index = ui.findIndex((x) => x.value === value);

      if (index === -1) {
        throw new Error(`No icon found for the current \`${value}\` theme`);
      }

      return index;
    },
    setIndex(index: number) {
      if (index < 0 || index >= ui.length) {
        throw new Error(`No icon found for the current index \`${index}\``);
      }

      if (index === get().getIndex()) {
        return;
      }

      set({ value: ui[index].value });
    },
  }));
}
