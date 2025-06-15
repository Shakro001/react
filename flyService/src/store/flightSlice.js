

import { create } from "zustand";

import service from "../services/flightService";

  
const useStore = create((set) => ({
  flights: [],
  filter: null, 
  isLoading: false,
  error: null,

  fetchFlights: async () => {
    set({ isLoading: true });
    try {
      const response = await service.get('flights');
      set({ flights: response, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: error.message });
      console.log(error);
    }
  },

  setFilter: (filter) => set({ filter }),
}));


export default useStore;