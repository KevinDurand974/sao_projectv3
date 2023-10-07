import { StateCreator } from "zustand";

type State = {
	bears: number;
};

type Action = {
	addOne: () => void;
	addBy: (by: number) => void;
	delOne: () => void;
	delBy: (by: number) => void;
	reset: () => void;
};

export type BearsStore = State & Action;

const initialState: State = { bears: 0 };

export const useBearsStore: StateCreator<BearsStore, [], [], BearsStore> = (set) => ({
	...initialState,

	addOne: () => set((state) => ({ bears: state.bears + 1 })),
	addBy: (by) => set((state) => ({ bears: state.bears + by })),
	delOne: () => set((state) => ({ bears: state.bears - 1 })),
	delBy: (by) => set((state) => ({ bears: state.bears - by })),
	reset: () => set(initialState),
});
