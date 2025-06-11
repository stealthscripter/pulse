// store/useUserSelectionStore.ts
import { create } from 'zustand';

interface UserSelectionState {
  userPick: string | null;
  toggleSelection: (item: string) => void;
  resetSelection: () => void;
}

export const useUserSelectionStore = create<UserSelectionState>((set) => ({
  userPick: null,

  toggleSelection: (item) =>
    set((state) => ({
      userPick: state.userPick === item ? null : item,
    })),

  resetSelection: () => set({ userPick: null }),
}));