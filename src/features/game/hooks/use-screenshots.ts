import ApiClient from "@/services/api-client";
import type { Screenshots } from "@/types/query";
import { useQuery } from "@tanstack/react-query";

const useScreenshots = (gameId: number) => {
  const apiClient = new ApiClient<Screenshots>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () => apiClient.getAll(),
  });
};

export default useScreenshots;
