import { useState } from "react";
import Navbar from "./components/layout/navbar";
import GameGrid from "./features/game/components/game-grid";
import GenreList from "./features/genre/components/genre-list";
import getHeadingTitle from "./utils/get-heading-title";
import type { Genres } from "./features/genre/type";
import type { Platform } from "./features/platform/type";
import type { GameQuery, SortOrder } from "./types/query";
import useGenres from "./features/genre/hooks/use-genres";

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genreId: undefined,
    platform: null,
    sortOrder: "",
    searchTerm: "",
  });

  const { data: genres } = useGenres();

  const handleSearch = (searchTerm: string) => {
    setGameQuery((prev) => ({ ...prev, searchTerm }));
  };

  const handleSelectedGenre = (genre: Genres | null) => {
    setGameQuery((prev) => ({
      ...prev,
      genreId: prev.genreId === genre?.id ? undefined : genre?.id,
    }));
  };

  const handleSelectedPlatforms = (platform: Platform | null) => {
    setGameQuery((prev) => ({
      ...prev,
      platform: prev.platform?.id === platform?.id ? null : platform,
    }));
  };

  const handleSelectedSortOrder = (sortOrder: SortOrder | null) => {
    setGameQuery((prev) => ({ ...prev, sortOrder }));
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar onSearch={handleSearch} />
      <main className="flex flex-1 mt-[60px]">
        <aside className="hidden lg:block w-64 border-r border-border bg-background/50 p-6 overflow-y-auto">
          <GenreList
            onGenreSelect={handleSelectedGenre}
            selectedGenreId={gameQuery.genreId}
          />
        </aside>
        <div className="flex-1 flex flex-col">
          <GameGrid
            gameQuery={gameQuery}
            headingTitle={getHeadingTitle(gameQuery, genres)}
            handleSelectedPlatforms={handleSelectedPlatforms}
            handleSelectedSortOrder={handleSelectedSortOrder}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
