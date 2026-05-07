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

  useEffect(() => {
    const control = new AbortController();

    apiClient
      .get<GamesResponse>("/games", { signal: control.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError((err as AxiosError).message);
      });

    return () => control.abort();
  }, []);

  return { games, error };
};

export default useGames;
