import type { GameQuery, SortOrder } from "@/types/query";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type GameQueryStore = {
  gameQuery: GameQuery;
  setSearch: (searchTerm: string) => void;
  setGenre: (genreId: number | undefined) => void;
  setPlatform: (platformId: number | undefined) => void;
  setSortOrder: (sortOrder: SortOrder) => void;
};

const useGameQueryStore = create<GameQueryStore>()(
  devtools(
    (set) => ({
      gameQuery: {
        genreId: undefined,
        platformId: undefined,
        sortOrder: "",
        searchTerm: "",
      },
      setSearch: (searchTerm: string) =>
        set((store) => ({ gameQuery: { ...store.gameQuery, searchTerm } })),
      setGenre: (genreId) =>
        set((store) => ({
          gameQuery: {
            ...store.gameQuery,
            genreId: store.gameQuery.genreId === genreId ? undefined : genreId,
          },
        })),
      setPlatform: (platformId) =>
        set((store) => ({
          gameQuery: {
            ...store.gameQuery,
            platformId:
              store.gameQuery.platformId === platformId
                ? undefined
                : platformId,
          },
        })),
      setSortOrder: (sortOrder) =>
        set((store) => ({
          gameQuery: { ...store.gameQuery, sortOrder },
        })),
    }),

    { name: "GameQueryStore" },
  ),
);

export default useGameQueryStore;
