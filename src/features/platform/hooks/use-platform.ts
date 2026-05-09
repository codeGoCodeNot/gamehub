import { useQuery } from "@tanstack/react-query";
import type { Platform } from "../type";
import ApiClient from "@/services/api-client";

const usePlatform = () => {
  const apiClient = new ApiClient<Platform>("platforms");

  return useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll(),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};

export default usePlatform;
