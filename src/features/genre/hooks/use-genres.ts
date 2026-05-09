import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { Genres } from "../type";
import type { FetchResponse } from "@/features/hooks/use-data";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genres>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default useGenres;
