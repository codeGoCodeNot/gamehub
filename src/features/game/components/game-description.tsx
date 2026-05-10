import { useState } from "react";
import type { Game } from "../type";
import { Button } from "@/components/ui/button";

type GameDescriptionProps = {
  game: Game | undefined;
};

const GameDescription = ({ game }: GameDescriptionProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{game?.name}</h1>
      <p className={expanded ? "" : "line-clamp-3"}>{game?.description_raw}</p>
      <Button
        variant="ghost"
        onClick={() => setExpanded(!expanded)}
        className="text-muted-foreground text-xs cursor-pointer px-0"
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </div>
  );
};

export default GameDescription;
