import apiClient from "@/services/api-client";
import type { AxiosError } from "axios";
import { useEffect, useState } from "react";

type Game = {
  id: number;
  name: string;
};

type GamesResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
};

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  console.log(games);

  useEffect(() => {
    const control = new AbortController();

    apiClient
      .get<GamesResponse>("/games", { signal: control.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => setError((err as AxiosError).message));

    return () => control.abort();
  }, []);

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
