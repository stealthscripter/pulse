// store/useSelectionStore.ts
import { create } from 'zustand';

interface SelectionState {
    selectedItems: string[];
    toggleSelection: (item: string) => void;
    resetSelection: () => void;
}

export const useSelectionStore = create<SelectionState>((set) => ({
    selectedItems: [],
    toggleSelection: (item) =>
        set((state) => {
            if (state.selectedItems.includes(item)) {
                return {
                    selectedItems: state.selectedItems.filter((i) => i !== item),
                };
            } else {
                let newSelection;
                if (state.selectedItems.length >= 2) {
                    // Remove oldest (first), add new
                    newSelection = [...state.selectedItems.slice(1), item];
                } else {
                    newSelection = [...state.selectedItems, item];
                }
                return {
                    selectedItems: newSelection,
                };
            }
        }),
    resetSelection: () => set({ selectedItems: [] }),
}));