import Navbar from "./components/navbar/components/navbar";
import GameGrid from "./features/game/components/game-grid";
import GenreList from "./features/genre/components/genre-list";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex flex-1 mt-[60px]">
        <aside className="hidden lg:block w-64 border-r border-border bg-background/50 p-6 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Genres</h2>
          <GenreList />
        </aside>
        <div className="flex-1">
          <GameGrid />
        </div>
      </main>
    </div>
  );
};

export default App;
