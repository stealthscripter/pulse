// store/useGameStore.ts
import { create } from 'zustand';

interface GameRound {
  id: string;
  userPick: number;
  computerPick: number;
  total: number;
  result: number; // 1–5
  winnerCategory: string;
  winner: 'user' | 'computer' | 'draw' | null;
}

interface GameState {
  userPick: number | null;
  computerPick: number | null;
  winner: 'user' | 'computer' | 'draw' | null;
  winnerCategory: string | null;
  history: GameRound[];
  isPlaying: boolean;

  setUserPick: (num: number) => void;
  playRound: () => void;
  resetGame: () => void;
}

const categories = ['Desto', 'Finger', 'Caw', 'Cawter', 'Oli'];

export const useGameStore = create<GameState>((set, get) => ({
  userPick: null,
  computerPick: null,
  winner: null,
  winnerCategory: null,
  history: [],
  isPlaying: false,

  setUserPick: (num) => set({ userPick: num }),

  playRound: () => {
    const state = get();
    const userPick = state.userPick;
    if (userPick === null) return;

    const computerPick = Math.floor(Math.random() * 5) + 1;
    const total = userPick + computerPick;
    const result = total % 5 || 5;
    const winnerCategory = categories[result - 1];

    let winner: 'user' | 'computer' | 'draw' | null = null;

    const userCategory = categories[userPick - 1];
    const computerCategory = categories[computerPick - 1];

    if (userCategory === winnerCategory && computerCategory === winnerCategory) {
      winner = 'draw';
    } else if (userCategory === winnerCategory) {
      winner = 'user';
    } else if (computerCategory === winnerCategory) {
      winner = 'computer';
    }

    const newRound: GameRound = {
      id: crypto.randomUUID?.() || `${Date.now()}`,
      userPick,
      computerPick,
      total,
      result,
      winnerCategory,
      winner,
    };

    set({
      computerPick,
      winner,
      winnerCategory,
      history: [...state.history, newRound],
      isPlaying: true,
    });
  },

  resetGame: () =>
    set({
      userPick: null,
      computerPick: null,
      winner: null,
      winnerCategory: null,
      isPlaying: false,
    }),
}));