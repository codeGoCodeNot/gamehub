import Navbar from "./components/layout/navbar";
import GameGrid from "./features/game/components/game-grid";
import GenreList from "./features/genre/components/genre-list";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex flex-1 mt-[60px]">
        <GenreList />
        <GameGrid />
      </main>
    </div>
  );
};

export default App;
