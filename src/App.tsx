import { useState } from "react";
import Navbar from "./components/navbar";
import GameGrid from "./features/game/components/game-grid";
import GenreList from "./features/genre/components/genre-list";
import type { Genres } from "./features/genre/type";
import PlatformList from "./features/platform/components/platform-list";
import type { Platform } from "./features/platform/type";
import type { GameQuery, SortOrder } from "./types/query";
import SortSelector from "./components/sort-selector";

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: "",
  });

  const handleSelectedGenre = (genre: Genres | null) => {
    setGameQuery((prev) => ({ ...prev, genre }));
  };

  const handleSelectedPlatforms = (platform: Platform | null) => {
    setGameQuery((prev) => ({ ...prev, platform }));
  };

  const handleSelectedSortOrder = (sortOrder: SortOrder | null) => {
    setGameQuery((prev) => ({ ...prev, sortOrder }));
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex flex-1 mt-[60px]">
        <aside className="hidden lg:block w-64 border-r border-border bg-background/50 p-6 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Genres</h2>
          <GenreList
            onGenreSelect={handleSelectedGenre}
            selectedGenre={gameQuery.genre}
          />
        </aside>
        <div className="flex-1 flex flex-col">
          <div className="p-2 flex gap-x-2 items-center">
            <PlatformList
              selectedPlatform={gameQuery.platform}
              onPlatformSelect={handleSelectedPlatforms}
            />
            <SortSelector
              onSelectSortOrder={handleSelectedSortOrder}
              selectedSortOrder={gameQuery.sortOrder}
            />
          </div>
          <GameGrid gameQuery={gameQuery} />
        </div>
      </main>
    </div>
  );
};

export default App;
