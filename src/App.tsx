import { useState } from "react";
import Navbar from "./components/navbar/components/navbar";
import GameGrid from "./features/game/components/game-grid";
import GenreList from "./features/genre/components/genre-list";
import type { Genres } from "./features/genre/type";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);

  const handleSelectedGenre = (genre: Genres | null) => {
    setSelectedGenre(genre);
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
        <div className="flex-1">
          <GameGrid selectedGenre={selectedGenre} />
        </div>
      </main>
    </div>
  );
};

export default App;
