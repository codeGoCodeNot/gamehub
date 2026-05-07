import useGames from "@/features/hooks/use-games";
import GameCard from "./game-card";
const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mx-auto max-w-6xl">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;
