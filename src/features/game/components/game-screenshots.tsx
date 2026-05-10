import useScreenshots from "../hooks/use-screenshots";

type GameScreenshotsProps = {
  gameId: number | undefined;
};

const GameScreenshots = ({ gameId }: GameScreenshotsProps) => {
  if (!gameId) return null;

  const { data } = useScreenshots(gameId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data?.map((screenshot) => (
        <div key={screenshot.id} className="overflow-hidden rounded-lg">
          <img
            src={screenshot.image}
            alt="Screenshot"
            className="w-full h-auto hover:scale-105 transition-transform"
          />
        </div>
      ))}
    </div>
  );
};

export default GameScreenshots;
