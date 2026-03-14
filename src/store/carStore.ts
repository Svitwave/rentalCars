import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Car, CarFilters } from "@/types/car";
import { getCars } from "@/lib/api";

interface CarStore {
  cars: Car[];
  totalPages: number;
  currentPage: number;
  isLoading: boolean;

  filters: CarFilters;
  setFilters: (filters: CarFilters) => void;

  favorites: Car[];
  toggleFavorite: (car: Car) => void;
  isFavorite: (id: string) => boolean;

  fetchCars: (filters?: CarFilters, page?: number) => Promise<void>;
  loadMore: () => Promise<void>;
  resetCars: () => void;
}

export const useCarStore = create<CarStore>()(
  persist(
    (set, get) => ({
      cars: [],
      totalPages: 1,
      currentPage: 1,
      isLoading: true,

      filters: {},
      setFilters: (filters) => set({ filters }),

      favorites: [],
      toggleFavorite: (car) => {
        const { favorites } = get();
        const exists = favorites.some((f) => f.id === car.id);
        set({
          favorites: exists
            ? favorites.filter((f) => f.id !== car.id)
            : [...favorites, car],
        });
      },
      isFavorite: (id) => get().favorites.some((f) => f.id === id),

      // Завантаження автомобілів
      fetchCars: async (filters = {}, page = 1) => {
        set({ isLoading: true, cars: [], currentPage: page });
        try {
          const data = await getCars({ ...filters, page, limit: 12 });
          set({
            cars: data.cars,
            totalPages: data.totalPages,
            currentPage: Number(data.page),
          });
        } finally {
          set({ isLoading: false });
        }
      },

      loadMore: async () => {
        const { filters, currentPage, cars } = get();
        const nextPage = currentPage + 1;
        set({ isLoading: true });
        try {
          const data = await getCars({ ...filters, page: nextPage, limit: 12 });
          set({
            cars: [...cars, ...data.cars],
            totalPages: data.totalPages,
            currentPage: Number(data.page),
          });
        } finally {
          set({ isLoading: false });
        }
      },

      resetCars: () => set({ cars: [], currentPage: 1, totalPages: 1 }),
    }),
    {
      name: "rental-car-storage",
      partialize: (state) => ({ favorites: state.favorites }),
    },
  ),
);
