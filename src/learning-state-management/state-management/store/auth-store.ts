import { create } from "zustand";
import { devtools } from "zustand/middleware";

type AuthStore = {
  username: string;
  login: (username: string) => void;
  logout: () => void;
};

const useAuthStore = create<AuthStore>()(
  devtools(
    (set) => ({
      username: "",
      login: (username: string) => set({ username }),
      logout: () => set({ username: "" }),
    }),
    { name: "AuthStore" },
  ),
);

export default useAuthStore;
