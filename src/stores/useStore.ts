import { useBearsStore, type BearsStore } from "./bears";

export const useStore = create<BearsStore>()((...set) => ({
	...useBearsStore(...set),
}));
