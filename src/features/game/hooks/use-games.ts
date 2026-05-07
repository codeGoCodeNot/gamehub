import useData from "@/features/hooks/use-data";
import type { GameQuery } from "@/types/query";
import { useMemo } from "react";
import type { Game } from "../type";

const useGames = (gameQuery: GameQuery) => {
  const requestConfig = useMemo(() => {
    const params: Record<string, string> = {};

    if (gameQuery.genre) params.genres = gameQuery.genre.id.toString();
    if (gameQuery.platform) params.platforms = gameQuery.platform.id.toString();
    if (gameQuery.sortOrder) params.ordering = gameQuery.sortOrder;

    return Object.keys(params).length ? { params } : undefined;
  }, [gameQuery.genre?.id, gameQuery.platform?.id, gameQuery.sortOrder]);

  return useData<Game>("/games", requestConfig);
};

export default useGames;
