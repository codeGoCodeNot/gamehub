import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import type { Game } from "@/features/type";

type GameCardProps = {
  game: Game;
};

const GameCard = ({ game }: GameCardProps) => {
  console.log(game);

  return (
    <Card className="overflow-hidden">
      <div>
        <img
          src={game.background_image}
          alt={game.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{game.name}</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default GameCard;
