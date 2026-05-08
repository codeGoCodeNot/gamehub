import type { GameQuery } from "@/types/query";

const getHeadingTitle = (gameQuery: GameQuery): string => {
  if (gameQuery.searchTerm)
    return `${gameQuery.genre?.name ?? gameQuery.platform?.name}: ${gameQuery.searchTerm}`;
  if (gameQuery.genre) return gameQuery.genre.name;
  if (gameQuery.platform) return gameQuery.platform.name;
  return "All Games";
};

export default getHeadingTitle;
