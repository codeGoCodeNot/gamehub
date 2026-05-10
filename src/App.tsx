import Navbar from "./components/layout/navbar";
import GameGrid from "./features/game/components/game-grid";
import GenreList from "./features/genre/components/genre-list";
import useGenres from "./features/genre/hooks/use-genres";
import usePlatform from "./features/platform/hooks/use-platform";
import useGameQuery from "./state-management/hooks/use-game-query";
import getHeadingTitle from "./utils/get-heading-title";

const App = () => {
  const { gameQuery, setSearch, setGenre, setPlatform, setSortOrder } =
    useGameQuery();

  const { data: genres } = useGenres();
  const { data: platforms } = usePlatform();

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar onSearch={setSearch} />
      <main className="flex flex-1 mt-[60px]">
        <aside className="hidden lg:block w-64 border-r border-border h-[calc(100vh-80px)] overflow-hidden bg-background/50">
          <GenreList
            onGenreSelect={(genre) => setGenre(genre?.id)}
            selectedGenreId={gameQuery.genreId}
          />
        </aside>
        <div className="flex-1 flex flex-col">
          <GameGrid
            gameQuery={gameQuery}
            headingTitle={getHeadingTitle(gameQuery, genres, platforms)}
            handleSelectedPlatforms={(platform) => setPlatform(platform?.id)}
            handleSelectedSortOrder={setSortOrder}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
