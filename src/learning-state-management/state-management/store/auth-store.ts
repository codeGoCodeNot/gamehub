import { create } from "zustand";

type AuthStore = {
  username: string;
  login: (username: string) => void;
  logout: () => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  username: "",
  login: (username) => set(() => ({ username })),
  logout: () => set(() => ({ username: "" })),
}));

export default useAuthStore;
