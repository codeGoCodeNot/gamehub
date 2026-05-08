import type { GameQuery } from "@/types/query";

const getHeadingTitle = (gameQuery: GameQuery): string => {
  if (gameQuery.searchTerm) return `Search: ${gameQuery.searchTerm}`;
  if (gameQuery.genre) return gameQuery.genre.name;
  return "All Games";
};

export default getHeadingTitle;
