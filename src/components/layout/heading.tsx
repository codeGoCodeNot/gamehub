import useGenres from "@/features/genre/hooks/use-genres";
import usePlatform from "@/features/platform/hooks/use-platform";
import useGameQuery from "@/state-management/hooks/use-game-query";
import getHeadingTitle from "@/utils/get-heading-title";

const Heading = () => {
  const { gameQuery } = useGameQuery();
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatform();

  const title = getHeadingTitle(gameQuery, genres, platforms);

  return (
    <div className="flex justify-between flex-col lg:flex-row gap-y-4 items-center px-4 py-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      </div>
    </div>
  );
};

export default Heading;
