import useGenres from "@/features/genre/hooks/use-genres";
import type { GameQuery } from "@/types/query";

const getHeadingTitle = (gameQuery: GameQuery): string => {
  const { data: genres } = useGenres();
  const genre = genres?.find((g) => g.id === gameQuery.genreId);

  if (gameQuery.searchTerm)
    return `${gameQuery.genreId ?? gameQuery.platform?.name ?? "Search"}: ${gameQuery.searchTerm}`;
  if (gameQuery.genreId) return genre?.name || "All Games";
  if (gameQuery.platform) return gameQuery.platform.name;
  return "All Games";
};

export default getHeadingTitle;
