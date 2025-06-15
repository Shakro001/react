

import { create } from 'zustand'

const useAuthStore = create((set) => ({
  auth: false,
  setAuth: (val) => set({ auth: val }),
}))

export default useAuthStore;
