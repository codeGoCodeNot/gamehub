import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import type { Game } from "@/features/game/type";
import GamePlatformIconList from "./game-platform-icon-list";
import { Badge } from "@/components/ui/badge";
import getCroppedImageUrl from "@/services/image-url";

type GameCardProps = {
  game: Game;
};

const GameCard = ({ game }: GameCardProps) => {
  const { name, background_image, parent_platforms, metacritic } = game;

  return (
    <Card className="overflow-hidden pt-0">
      <div className="aspect-video overflow-hidden">
        <img
          src={getCroppedImageUrl(background_image)}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{name}</CardTitle>
        <div className="flex justify-between items-center">
          <GamePlatformIconList
            platforms={(parent_platforms ?? []).map(({ platform }) => platform)}
          />
          <Badge
            variant="destructive"
            className={`${(metacritic ?? 0) >= 75 ? "text-green-400" : (metacritic ?? 0) >= 50 ? "text-yellow-400" : "text-red-600"} text-sm`}
          >
            {metacritic ?? "N/A"}
          </Badge>
        </div>
      </CardHeader>
    </Card>
  );
};

export default GameCard;
