export {}
declare global {
  const combine: typeof import('zustand/middleware')['combine']
  const create: typeof import('zustand')['create']
  const motion: typeof import('framer-motion')['motion']
  const useBearsStore: typeof import('C:/Dev/2023/WallpaperEngine/sao_projectv3/src/stores/bears/index')['useBearsStore']
  const useCallback: typeof import('react')['useCallback']
  const useContext: typeof import('react')['useContext']
  const useEffect: typeof import('react')['useEffect']
  const useMemo: typeof import('react')['useMemo']
  const useReducer: typeof import('react')['useReducer']
  const useRef: typeof import('react')['useRef']
  const useState: typeof import('react')['useState']
  const useStore: typeof import('C:/Dev/2023/WallpaperEngine/sao_projectv3/src/stores/useStore')['useStore']
}
// for type re-export
declare global {
  // @ts-ignore
  export type { BearsStore } from 'C:/Dev/2023/WallpaperEngine/sao_projectv3/src/stores/bears/index.ts'
}