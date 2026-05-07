import apiClient from "@/services/api-client";
import type { AxiosError } from "axios";
import axios from "axios";
import { useEffect, useState } from "react";
import type { Game } from "../type";

type GamesResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
};

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const control = new AbortController();

    setIsLoading(true);
    apiClient
      .get<GamesResponse>("/games", { signal: control.signal })
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError((err as AxiosError).message);
        setIsLoading(false);
      });

    return () => control.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
