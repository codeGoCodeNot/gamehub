import ApiClient from "@/services/api-client";
import type { GameQuery } from "@/types/query";
import { useInfiniteQuery } from "@tanstack/react-query";
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
