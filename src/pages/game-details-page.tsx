import GameDefinition from "@/features/game/components/game-definition";
import GameDescription from "@/features/game/components/game-description";
import useGame from "@/features/game/hooks/use-game";
import { LucideLoader } from "lucide-react";
import { useParams } from "react-router-dom";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen ">
        <LucideLoader className="animate-spin" />
      </div>
    );

  if (error) return <p>Error loading game details: {error.message}</p>;

  return (
    <div className="py-20 flex flex-col items-center px-10 min-h-screen w-full">
      <div className="flex flex-col gap-y-5">
        <GameDescription game={game} />
        <GameDefinition
          platforms={game?.platforms}
          metacritic={game?.metacritic}
          genres={game?.genres}
          publishers={game?.publishers}
        />
      </div>
    </div>
  );
};

export default GameDetailsPage;
