import { create } from 'zustand';
import { script, type Scene, type Choice } from '@/data/script';
export type GameStatus = 'title' | 'playing' | 'paused' | 'ended';
export interface HistoryEntry {
  speaker: string;
  dialogue: string;
}
export interface GameState {
  status: GameStatus;
  currentSceneId: string;
  history: HistoryEntry[];
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
  saveGame: () => void;
  loadGame: () => boolean;
  hasSavedGame: () => boolean;
}
const SAVE_KEY = 'architects-chronicle-save';
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
  startGame: () => set({ ...initialState, status: 'playing', currentSceneId: 'intro' }),
  goToTitle: () => set({ status: 'title' }),
  advanceScene: (sceneId: string) => {
    const scene = script[sceneId];
    if (scene) {
      set((state) => ({
        currentSceneId: sceneId,
        history: [...state.history, { speaker: scene.speaker || scene.narrator || 'Narrator', dialogue: scene.dialogue }],
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
  saveGame: () => {
    try {
      const stateToSave = {
        currentSceneId: get().currentSceneId,
        history: get().history,
        stats: get().stats,
      };
      localStorage.setItem(SAVE_KEY, JSON.stringify(stateToSave));
      console.log('Game saved!');
    } catch (error) {
      console.error('Failed to save game:', error);
    }
  },
  loadGame: () => {
    try {
      const savedData = localStorage.getItem(SAVE_KEY);
      if (savedData) {
        const savedState = JSON.parse(savedData);
        set({ ...savedState, status: 'playing' });
        console.log('Game loaded!');
        return true;
      }
    } catch (error) {
      console.error('Failed to load game:', error);
    }
    return false;
  },
  hasSavedGame: () => {
    return localStorage.getItem(SAVE_KEY) !== null;
  },
}));