import type { StateCreator } from "zustand";

type State = {
	isMenuOpen: boolean;
};

type Action = {
	toggleMenu: () => void;
};

export type MenuStore = State & Action;

const initialState: State = { isMenuOpen: false };

export const useMenuStore: StateCreator<MenuStore, [], [], MenuStore> = (set) => ({
	...initialState,

	toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
});
