import apiClient from "@/services/api-client";
import axios, { AxiosError, type AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

export type FetchResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig) => {
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, {
        ...requestConfig,
        signal: controller.signal,
      })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError((err as AxiosError).message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [endpoint, requestConfig]);

  return { data, error, isLoading };
};

export default useData;
