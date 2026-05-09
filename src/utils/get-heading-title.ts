import type { Genres } from "@/features/genre/type";
import type { GameQuery } from "@/types/query";

const getHeadingTitle = (
  gameQuery: GameQuery,
  genres: Genres[] | undefined,
): string => {
  const genre = genres?.find((g) => g.id === gameQuery.genreId);

  if (gameQuery.searchTerm)
    return `${gameQuery.genreId ?? gameQuery.platform?.name ?? "Search"}: ${gameQuery.searchTerm}`;
  if (gameQuery.genreId) return genre?.name || "All Games";
  if (gameQuery.platform) return gameQuery.platform.name;
  return "All Games";
};

export default getHeadingTitle;
