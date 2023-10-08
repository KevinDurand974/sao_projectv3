import type { StateCreator } from "zustand";

type State = {
	isMenuOpen: boolean;
	mainSelected: number | null;
	subSecleted: number | null;
};

type Action = {
	toggleMenu: () => void;
	mainSelect: (index: number) => void;
	subSelect: (index: number) => void;
};

export type MenuStore = State & Action;

const initialState: State = { isMenuOpen: false, mainSelected: 1, subSecleted: null };

export const useMenuStore: StateCreator<MenuStore, [], [], MenuStore> = (set) => ({
	...initialState,

	toggleMenu: () =>
		set((state) => ({
			isMenuOpen: !state.isMenuOpen,
			mainSelected: state.isMenuOpen ? state.mainSelected : 1,
			subSecleted: state.isMenuOpen ? state.subSecleted : null,
		})),
	mainSelect: (index) => set(() => ({ mainSelected: index })),
	subSelect: (index) => set(() => ({ mainSelected: index })),
});
