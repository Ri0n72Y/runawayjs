import { create } from "zustand";
import { Pages } from "./types";

interface UiState {
  page: Pages;
  setPage: (page: Pages) => void;
}
export const useUIState = create<UiState>()((set) => ({
  page: Pages.welcome,
  setPage: (page: Pages) => set({ page }),
}));
