import useGames from "../hooks/use-games";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
