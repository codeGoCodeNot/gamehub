import useData from "@/features/hooks/use-data";
import type { GameQuery } from "@/types/query";
import { useMemo } from "react";
import type { Game } from "../type";

const useGames = (gameQuery: GameQuery) => {
  const requestConfig = useMemo(() => {
    const params: Record<string, string> = {};

    if (gameQuery.genre) params.genres = gameQuery.genre.id.toString();
    if (gameQuery.platform) params.platforms = gameQuery.platform.id.toString();

    return Object.keys(params).length ? { params } : undefined;
  }, [gameQuery]);

  return useData<Game>("/games", requestConfig);
};

export default useGames;
