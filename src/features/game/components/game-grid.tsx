import Heading from "@/components/layout/heading";
import SortSelector from "@/components/sort-selector";
import PlatformList from "@/features/platform/components/platform-list";
import type { Platform } from "@/features/platform/type";
import type { GameQuery, SortOrder } from "@/types/query";
import { useState } from "react";
import useGames from "../hooks/use-games";
import GameCard from "./game-card";
import GameCardSkeleton from "./game-card-skeleton";
import { Button } from "@/components/ui/button";

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
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGames(gameQuery);

  const games = data?.pages.flat() || [];
  const [showAllPages, setShowAllPages] = useState(true);

  const displayedGames = showAllPages ? games : games.slice(0, 20);

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
        {error && <p className="text-red-500">{error.message}</p>}
        {!isLoading &&
          (gameQuery.searchTerm || gameQuery.platform) &&
          games?.length === 0 && (
            <div className="flex justify-center items-center h-96 col-span-full">
              <p className="text-lg text-muted-foreground">No games found</p>
            </div>
          )}
        {displayedGames?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
        {isFetchingNextPage &&
          Array.from({ length: 10 }).map((_, i) => (
            <GameCardSkeleton key={`skeleton-${i}`} />
          ))}
      </div>
      {showAllPages && hasNextPage && (
        <Button
          variant="ghost"
          onClick={() => fetchNextPage()}
          className="my-2"
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}

      {showAllPages && !hasNextPage && (
        <div className="flex justify-center my-2">
          <Button onClick={() => setShowAllPages(false)}>Show Less</Button>
        </div>
      )}
    </div>
  );
};

export default GameGrid;
