import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { Platform } from "../type";
import type { FetchResponse } from "@/features/hooks/use-data";

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });

export default usePlatform;
