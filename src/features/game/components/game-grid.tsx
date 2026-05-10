import Heading from "@/components/layout/heading";
import SortSelector from "@/components/sort-selector";
import PlatformList from "@/features/platform/components/platform-list";
import useGameQuery from "@/state-management/hooks/use-game-query";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/use-games";
import GameCard from "./game-card";
import GameCardSkeleton from "./game-card-skeleton";

const GameGrid = () => {
  const { gameQuery } = useGameQuery();

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGames(gameQuery);

  const games = data?.pages.flat() || [];

  return (
    <div className="flex-1 flex flex-col">
      <InfiniteScroll
        dataLength={games.length}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={
          <div className="flex justify-center my-4">
            <p>Loading more...</p>
          </div>
        }
      >
        <div className="flex flex-col flex-1">
          <Heading />
          <div className="p-2 flex gap-x-2 items-center">
            <PlatformList />
            <SortSelector />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 p-4 mx-auto w-full">
            {isLoading &&
              Array.from({ length: 15 }).map((_, index) => (
                <GameCardSkeleton key={index} />
              ))}
            {error && <p className="text-red-500">{error.message}</p>}
            {!isLoading &&
              (gameQuery.searchTerm || gameQuery.platformId) &&
              games?.length === 0 && (
                <div className="flex justify-center items-center h-96 col-span-full">
                  <p className="text-lg text-muted-foreground">
                    No games found
                  </p>
                </div>
              )}
            {games?.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
            {isFetchingNextPage &&
              Array.from({ length: 10 }).map((_, i) => (
                <GameCardSkeleton key={`skeleton-${i}`} />
              ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default GameGrid;
