import useData from "@/features/hooks/use-data";
import type { Game } from "../type";
import type { Genres } from "@/features/genre/type";
import type { Platform } from "@/features/platform/type";
import { useMemo } from "react";

const useGames = (
  selectedGenre: Genres | null,
  selectedPlatforms: Platform[],
) => {
  const requestConfig = useMemo(() => {
    const params: Record<string, string | string[]> = {};

    if (selectedGenre) params.genres = selectedGenre.id.toString();
    if (selectedPlatforms.length)
      params.platforms = selectedPlatforms.map((p) => p.id.toString());

    return Object.keys(params).length ? { params } : undefined;
  }, [selectedGenre?.id, selectedPlatforms]);

  return useData<Game>("/games", requestConfig);
};

export default useGames;
