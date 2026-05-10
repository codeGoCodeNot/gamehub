import { create } from "zustand";
import { devtools } from "zustand/middleware";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

const useCounterStore = create<CounterStore>()(
  devtools(
    (set) => ({
      count: 0,
      increment: () => set((store) => ({ count: store.count + 1 })),
      decrement: () => set((store) => ({ count: store.count - 1 })),
      reset: () => set(() => ({ count: 0 })),
    }),
    { name: "CounterStore" },
  ),
);

export default useCounterStore;
