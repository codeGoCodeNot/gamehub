import { Badge } from "@/components/ui/badge";
import type { Platform } from "@/features/platform/type";
import { metacriticColorMap } from "../constant";
import type { Genres } from "@/features/genre/type";
import type { Publisher } from "../type";

type GameDefinitionProps = {
  platforms: { platform: Platform }[] | undefined;
  metacritic?: number;
  genres: Genres[] | undefined;
  publishers: Publisher[] | undefined;
};

const GameDefinition = ({
  platforms,
  metacritic,
  genres,
  publishers,
}: GameDefinitionProps) => {
  return (
    <div className="grid grid-cols-2 gap-10 w-3/4">
      {/* Left column */}
      <div>
        <h1 className="text-lg font-bold text-muted-foreground mb-2">
          Platforms:
        </h1>
        <div className="text-sm flex flex-col gap-1">
          {platforms?.map(({ platform }) => (
            <div key={platform.id}>{platform.name}</div>
          ))}
        </div>
      </div>

      {/* Right column */}
      {genres && (
        <div>
          <h1 className="text-lg font-bold text-muted-foreground mb-2">
            Genres:
          </h1>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <Badge key={genre.id}>{genre.name}</Badge>
            ))}
          </div>
        </div>
      )}

      {/* Left column */}
      {metacritic !== undefined && (
        <div>
          <h1 className="text-lg font-bold text-muted-foreground mb-2">
            Metacritic:
          </h1>
          <Badge className={metacriticColorMap(metacritic)}>{metacritic}</Badge>
        </div>
      )}

      {/* Right column */}
      {publishers && (
        <div>
          <h1 className="text-lg font-bold text-muted-foreground mb-2">
            Publishers:
          </h1>
          <div className="flex flex-wrap gap-2">
            {publishers.map((publisher) => (
              <Badge variant="destructive" key={publisher.id}>
                {publisher.name}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameDefinition;
