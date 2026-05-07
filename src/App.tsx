import { useState } from "react";
import Navbar from "./components/navbar/components/navbar";
import GameGrid from "./features/game/components/game-grid";
import GenreList from "./features/genre/components/genre-list";
import type { Genres } from "./features/genre/type";
import PlatformDropdown from "./features/platform/components/platform-dropdown";
import type { Platform } from "./features/platform/type";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([]);

  const handleSelectedGenre = (genre: Genres | null) => {
    setSelectedGenre(genre);
  };

  const handleSelectedPlatforms = (platforms: Platform[]) => {
    setSelectedPlatforms(platforms);
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex flex-1 mt-[60px]">
        <aside className="hidden lg:block w-64 border-r border-border bg-background/50 p-6 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Genres</h2>
          <GenreList
            onGenreSelect={handleSelectedGenre}
            selectedGenre={selectedGenre}
          />
        </aside>
        <div className="flex-1 flex flex-col">
          <div className="p-2">
            <PlatformDropdown
              selectedPlatforms={selectedPlatforms}
              onPlatformSelect={handleSelectedPlatforms}
            />
          </div>
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatforms={selectedPlatforms}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
