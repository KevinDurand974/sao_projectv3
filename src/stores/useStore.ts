import { useMenuStore, type MenuStore } from "./menu";

export const useStore = create<MenuStore>()((...set) => ({
	...useMenuStore(...set),
}));
