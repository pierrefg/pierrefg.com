import { create } from 'zustand';

const useStore = create((set) => ({
  darkMode: true,
  switchTheme: () => set((state) => ({ darkMode: !state.darkMode })),
  menuOpen: false,
  switchMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
}));

export default useStore;