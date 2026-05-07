import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import type { Game } from "@/features/game/type";
import GamePlatformIconList from "./game-platform-icon-list";

type GameCardProps = {
  game: Game;
};

const GameCard = ({ game }: GameCardProps) => {
  const { name, background_image, parent_platforms } = game;

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img
          src={background_image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{name}</CardTitle>

        <GamePlatformIconList
          platforms={parent_platforms.map(({ platform }) => platform)}
        />
      </CardHeader>
    </Card>
  );
};

export default GameCard;
