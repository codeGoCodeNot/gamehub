import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { Genres } from "../type";

const useGenres = () => {
  const apiClient = new ApiClient<Genres>("genres");

  return useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};

export default useGenres;
