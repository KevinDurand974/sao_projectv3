import type { StateCreator } from "zustand";

type State = {
	isOpen: boolean;
};

type Action = {
	open: () => void;
	close: () => void;
};

export type MenuStore = State & Action;

const initialState: State = { isOpen: false };

export const useMenuStore: StateCreator<MenuStore, [], [], MenuStore> = (set) => ({
	...initialState,

	open: () => set(() => ({ isOpen: true })),
	close: () => set(() => ({ isOpen: false })),
});
