import { useQuery } from "@tanstack/react-query";
import type { Game } from "../type";
import ApiClient from "@/services/api-client";

const useGame = (slug: string) => {
  const apiClient = new ApiClient<Game>("/games");

  return useQuery({
    queryKey: ["game", slug],
    queryFn: async () => apiClient.get(slug),
  });
};

export default useGame;
