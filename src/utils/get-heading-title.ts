import type { Genres, Platform } from "@/entities";
import type { GameQuery } from "@/types/query";

const getHeadingTitle = (
  gameQuery: GameQuery,
  genres: Genres[] | undefined,
  platforms: Platform[] | undefined,
): string => {
  const genre = genres?.find((g) => g.id === gameQuery.genreId);
  const platform = platforms?.find((p) => p.id === gameQuery.platformId);

  if (gameQuery.searchTerm) {
    const filterName = genre?.name || platform?.name || "Search";
    return `${filterName}: ${gameQuery.searchTerm}`;
  }

  if (gameQuery.genreId) return genre?.name || "All Games";
  if (gameQuery.platformId) return platform?.name || "All Games";
  return "All Games";
};

export default getHeadingTitle;
