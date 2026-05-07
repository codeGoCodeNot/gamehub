import apiClient from "@/services/api-client";
import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import type { Genres } from "../type";

const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  type GenresResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Genres[];
  };

  useEffect(() => {
    const control = new AbortController();

    setIsLoading(true);
    apiClient
      .get<GenresResponse>("/genres", { signal: control.signal })
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError((err as AxiosError).message);
        setIsLoading(false);
      });
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
