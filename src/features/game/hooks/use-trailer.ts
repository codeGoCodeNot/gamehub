import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { Trailer } from "../type";

const useTrailer = (id: number) => {
  const apiClient = new ApiClient<Trailer>(`/games/${id}/movies`);

  return useQuery({
    queryKey: ["trailers", id],
    queryFn: () => apiClient.getAll(),
  });
};

export default useTrailer;
