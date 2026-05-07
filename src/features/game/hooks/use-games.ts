import useData from "@/features/hooks/use-data";
import type { Game } from "../type";
import type { Genres } from "@/features/genre/type";
import { useMemo } from "react";

const useGames = (selectedGenre: Genres | null) => {
  const requestConfig = useMemo(() => {
    return selectedGenre ? { params: { genres: selectedGenre.id } } : undefined;
  }, [selectedGenre?.id]);

  return useData<Game>("/games", requestConfig);
};

export default useGames;
