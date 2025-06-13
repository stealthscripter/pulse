// store/useGameStore.ts
import { create } from 'zustand';

interface GameRound {
  id: string;
  playerFinger: number;
  computerFinger: number;
  total: number;
  result: number; // 1–5
  winner: 'player' | 'computer' | 'draw' | null;
  winnerCategory: string;
  playerWin: number;
  computerWin: number
}

interface GameState {
  playerFinger: number | null;
  computerFinger: number | null;
  winnerCategory: string | null;
  history: GameRound[];
  winner: 'player' | 'computer' | 'draw' | null;
  isPlaying: boolean;
  isReady: boolean;
  playerWin: number | null;
  computerWin: number | null;


  setPlayerFinger: (num: number | null) => void;
  playRound: (playerPick: string, computerPick: string) => void;
  resetGame: () => void;
  setReady: () => void;
}

const categories = ['Desto', 'Finger', 'Caw', 'Cawter', 'Oli'];

export const useGameStore = create<GameState>((set, get) => ({
  playerFinger: null,
  computerFinger: null,
  winner: null,
  winnerCategory: null,
  history: [],
  isPlaying: false,
  isReady: false,
  computerWin: null,
  playerWin: null,

  setPlayerFinger: (num) => set({ playerFinger: num }),


  playRound: (playerPick, computerPick) => {
    const state = get();
    const playerFinger = state.playerFinger;
    if (playerFinger === null) return;

    const computerFinger = Math.floor(Math.random() * 5) + 1;
    const total = playerFinger + computerFinger;
    const result = total % 5 || 5;
    const winnerCategory = categories[result - 1];

    let winner: 'player' | 'computer' | 'draw' | null = 'draw';

    // Calculate new win counts based on previous state
    const prevPlayerWin = state.playerWin ?? 0;
    const prevComputerWin = state.computerWin ?? 0;

    let newPlayerWin = prevPlayerWin;
    let newComputerWin = prevComputerWin;

    if (playerPick === winnerCategory) {
      newPlayerWin += 1;
      winner = 'player';
    } else if (computerPick === winnerCategory) {
      newComputerWin += 1;
      winner = 'computer';
    }

    const newRound: GameRound = {
      id: crypto.randomUUID?.() || `${Date.now()}`,
      playerFinger,
      computerFinger,
      total,
      result,
      winner,
      winnerCategory,
      computerWin: newComputerWin,
      playerWin: newPlayerWin,
    };

    set({
      playerFinger,
      computerFinger,
      winnerCategory,
      winner,
      history: [...state.history, newRound],
      isPlaying: true,
      playerWin: newPlayerWin,
      computerWin: newComputerWin
    });
  },


  resetGame: () =>
    set({
      playerFinger: null,
      computerFinger: null,
      winnerCategory: null,
      isPlaying: false,
    }),

  setReady: () =>
    set({
      isReady: true
    })


}));