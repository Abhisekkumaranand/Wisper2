import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("wisper") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("wisper", theme);
    set({ theme });
  },
}));
