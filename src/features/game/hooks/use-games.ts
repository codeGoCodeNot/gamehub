import ApiClient from "@/services/api-client";
import type { GameQuery } from "@/types/query";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import type { Game } from "@/entities";

const useGames = (gameQuery: GameQuery) => {
  const apiClient = new ApiClient<Game>("/games");

  const requestConfig = useMemo(() => {
    const params: Record<string, string> = {};

    if (gameQuery.genreId) params.genres = gameQuery.genreId.toString();
    if (gameQuery.platformId)
      params.platforms = gameQuery.platformId.toString();
    if (gameQuery.sortOrder) params.ordering = gameQuery.sortOrder;
    if (gameQuery.searchTerm) params.search = gameQuery.searchTerm;

    return Object.keys(params).length ? { params } : undefined;
  }, [
    gameQuery.genreId,
    gameQuery.platformId,
    gameQuery.sortOrder,
    gameQuery.searchTerm,
  ]);

  const pageSize = 20;

  return useInfiniteQuery({
    queryKey: ["games", requestConfig],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        ...requestConfig,
        params: {
          ...requestConfig?.params,
          page: pageParam,
          page_size: 20,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === pageSize ? allPages.length + 1 : undefined,
    initialPageParam: 1,
  });
};

export default useGames;
