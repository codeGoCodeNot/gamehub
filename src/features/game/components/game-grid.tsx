import type { Genres } from "@/features/genre/type";
import useGames from "../hooks/use-games";
import GameCard from "./game-card";
import GameCardSkeleton from "./game-card-skeleton";
import type { Platform } from "@/features/platform/type";
import { useState } from "react";

type GameGridProps = {
  selectedGenre: Genres | null;
  selectedPlatforms: Platform[];
};

const GameGrid = ({ selectedGenre, selectedPlatforms = [] }: GameGridProps) => {
  const {
    data: games,
    error,
    isLoading,
  } = useGames(selectedGenre, selectedPlatforms);

  const [isExpanded, setIsExpanded] = useState(false);

  const displayedGames = isExpanded ? games : games?.slice(0, 9);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 p-4 mx-auto w-full">
        {isLoading &&
          Array.from({ length: 9 }).map((_, index) => (
            <GameCardSkeleton key={index} />
          ))}
        {error && <p className="text-red-500">{error}</p>}
        {displayedGames?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      {games && games.length > 9 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`text-sm text-blue-600 dark:text-blue-400 hover:underline ${isExpanded ? "mb-2" : "mt-2"}`}
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </div>
  );
};

export default GameGrid;
