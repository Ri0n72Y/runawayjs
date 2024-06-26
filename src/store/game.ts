import { create } from "zustand";

interface GameStatus {
  player: {
    name: string;
  };
  getVariables: () => Record<string, string>;
}

export const useGame = create<GameStatus>()((_, get) => ({
  player: {
    name: "Cute Cat",
  },
  getVariables: () => ({
    ["player.name"]: get().player.name,
  }),
}));
