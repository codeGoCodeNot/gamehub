import useGames from "../hooks/use-games";
import GameCard from "./game-card";
import GameCardSkeleton from "./game-card-skeleton";
const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mx-auto max-w-6xl">
        {isLoading &&
          Array.from({ length: 9 }).map((_, index) => (
            <GameCardSkeleton key={index} />
          ))}
        {error && <p className="text-red-500">{error}</p>}
        {games?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;
