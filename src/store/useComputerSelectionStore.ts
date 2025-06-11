// store/useComputerStore.ts
import { create } from 'zustand';

interface ComputerStore {
  computerPick: string | null;
  isAnimating: boolean;
  tempPick: string | null;

  setComputerPick: (pick: string | null) => void;
  setIsAnimating: (isAnimating: boolean) => void;
  setTempPick: (pick: string | null) => void;
  resetComputerPicks: () => void;
}

export const useComputerStore = create<ComputerStore>((set) => ({
  computerPick: null,
  isAnimating: false,
  tempPick: null,

  setComputerPick: (pick) => set({ computerPick: pick }),
  setIsAnimating: (isAnimating) => set({ isAnimating }),
  setTempPick: (pick) => set({ tempPick: pick }),

  resetComputerPicks: () =>
    set({
      computerPick: null,
      tempPick: null,
      isAnimating: false,
    }),
}));