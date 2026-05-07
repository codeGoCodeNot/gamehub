import useData from "@/features/hooks/use-data";
import type { Game } from "../type";
import type { Genres } from "@/features/genre/type";
import type { Platform } from "@/features/platform/type";
import { useMemo } from "react";

const useGames = (
  selectedGenre: Genres | null,
  selectedPlatform: Platform | null,
) => {
  const requestConfig = useMemo(() => {
    const params: Record<string, string> = {};

    if (selectedGenre) params.genres = selectedGenre.id.toString();
    if (selectedPlatform) params.platforms = selectedPlatform.id.toString();

    return Object.keys(params).length ? { params } : undefined;
  }, [selectedGenre?.id, selectedPlatform?.id]);

  return useData<Game>("/games", requestConfig);
};

export default useGames;
