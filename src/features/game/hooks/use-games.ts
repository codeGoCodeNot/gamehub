import ApiClient from "@/services/api-client";
import type { GameQuery } from "@/types/query";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import type { Game } from "../type";

const useGames = (gameQuery: GameQuery) => {
  const apiClient = new ApiClient<Game>("/games");

  const requestConfig = useMemo(() => {
    const params: Record<string, string> = {};

    if (gameQuery.genre) params.genres = gameQuery.genre.id.toString();
    if (gameQuery.platform) params.platforms = gameQuery.platform.id.toString();
    if (gameQuery.sortOrder) params.ordering = gameQuery.sortOrder;
    if (gameQuery.searchTerm) params.search = gameQuery.searchTerm;

    return Object.keys(params).length ? { params } : undefined;
  }, [
    gameQuery.genre?.id,
    gameQuery.platform?.id,
    gameQuery.sortOrder,
    gameQuery.searchTerm,
  ]);

  return useQuery({
    queryKey: ["games", requestConfig],
    queryFn: () => apiClient.getAll(requestConfig),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};

export default useGames;
