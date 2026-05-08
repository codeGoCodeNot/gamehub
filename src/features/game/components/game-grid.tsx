import Heading from "@/components/layout/heading";
import SortSelector from "@/components/sort-selector";
import PlatformList from "@/features/platform/components/platform-list";
import type { Platform } from "@/features/platform/type";
import type { GameQuery, SortOrder } from "@/types/query";
import { useState } from "react";
import useGames from "../hooks/use-games";
import GameCard from "./game-card";
import GameCardSkeleton from "./game-card-skeleton";

type GameGridProps = {
  gameQuery: GameQuery;
  headingTitle: string;
  handleSelectedPlatforms: (platform: Platform | null) => void;
  handleSelectedSortOrder: (sortOrder: SortOrder | null) => void;
};

const GameGrid = ({
  gameQuery,
  headingTitle,
  handleSelectedPlatforms,
  handleSelectedSortOrder,
}: GameGridProps) => {
  const { data: games, error, isLoading } = useGames(gameQuery);

  const [isExpanded, setIsExpanded] = useState(false);

  const displayedGames = isExpanded ? games : games?.slice(0, 15);

  return (
    <div className="flex flex-col flex-1">
      <Heading title={headingTitle} />
      <div className="p-2 flex gap-x-2 items-center">
        <PlatformList
          selectedPlatform={gameQuery.platform}
          onPlatformSelect={handleSelectedPlatforms}
        />
        <SortSelector
          onSelectSortOrder={handleSelectedSortOrder}
          selectedSortOrder={gameQuery.sortOrder}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 p-4 mx-auto w-full">
        {isLoading &&
          Array.from({ length: 15 }).map((_, index) => (
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
