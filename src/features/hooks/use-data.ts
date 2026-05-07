import apiClient from "@/services/api-client";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

type FetchResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const control = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: control.signal })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError((err as AxiosError).message);
        setIsLoading(false);
      });
  }, []);

  return { data, error, isLoading };
};

export default useData;
