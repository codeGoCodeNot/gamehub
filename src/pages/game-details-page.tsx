import GameDefinition from "@/features/game/components/game-definition";
import GameDescription from "@/features/game/components/game-description";
import GameScreenshots from "@/features/game/components/game-screenshots";
import GameTrailer from "@/features/game/game-trailer";
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
    <div className="py-30 flex flex-1 flex-col items-center px-10 min-h-screen w-full">
      <div className="flex flex-col gap-y-10">
        <GameDescription game={game} />
        <GameDefinition
          platforms={game?.platforms}
          metacritic={game?.metacritic}
          genres={game?.genres}
          publishers={game?.publishers}
        />
        <div className="flex flex-col items-center">
          <GameTrailer id={game?.id} />
          <GameScreenshots gameId={game?.id} />
        </div>
      </div>
    </div>
  );
};

export default GameDetailsPage;
