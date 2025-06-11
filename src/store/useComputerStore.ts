// store/useComputerStore.ts
import { create } from 'zustand';

interface ComputerStore {
  computerPicks: string[];
  isAnimating: boolean;
  tempPick: string | null;
  setComputerPicks: (picks: string[]) => void;
  setIsAnimating: (isAnimating: boolean) => void;
  setTempPick: (pick: string | null) => void;
  resetComputerPicks: () => void;
}

export const useComputerStore = create<ComputerStore>((set) => ({
  computerPicks: [],
  isAnimating: false,
  tempPick: null,

  setComputerPicks: (picks) => set({ computerPicks: picks }),
  setIsAnimating: (isAnimating) => set({ isAnimating }),
  setTempPick: (pick) => set({ tempPick: pick }),
  resetComputerPicks: () =>
    set({
      computerPicks: [],
      tempPick: null,
      isAnimating: false,
    }),
}));