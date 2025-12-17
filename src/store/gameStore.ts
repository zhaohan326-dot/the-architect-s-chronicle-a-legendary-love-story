import { create } from 'zustand';
import { script, type Scene, type Choice } from '@/data/script';
export type GameStatus = 'title' | 'playing' | 'paused' | 'ended';
export interface GameState {
  status: GameStatus;
  currentSceneId: string;
  history: string[];
  stats: {
    legendary: number;
    romantic: number;
  };
}
export interface GameActions {
  startGame: () => void;
  goToTitle: () => void;
  advanceScene: (sceneId: string) => void;
  makeChoice: (choice: Choice) => void;
  getCurrentScene: () => Scene;
}
const initialState: GameState = {
  status: 'title',
  currentSceneId: 'intro',
  history: [],
  stats: {
    legendary: 0,
    romantic: 0,
  },
};
export const useGameStore = create<GameState & GameActions>((set, get) => ({
  ...initialState,
  startGame: () => set({ status: 'playing', currentSceneId: 'intro', history: [], stats: { legendary: 0, romantic: 0 } }),
  goToTitle: () => set({ status: 'title' }),
  advanceScene: (sceneId: string) => {
    if (script[sceneId]) {
      set((state) => ({
        currentSceneId: sceneId,
        history: [...state.history, sceneId],
      }));
    } else {
      console.error(`Scene with id "${sceneId}" not found.`);
      set({ status: 'ended' });
    }
  },
  makeChoice: (choice: Choice) => {
    set((state) => {
      const newStats = { ...state.stats };
      if (choice.statChange) {
        newStats.legendary += choice.statChange.legendary || 0;
        newStats.romantic += choice.statChange.romantic || 0;
      }
      return { stats: newStats };
    });
    get().advanceScene(choice.nextScene);
  },
  getCurrentScene: () => {
    const currentSceneId = get().currentSceneId;
    return script[currentSceneId];
  },
}));