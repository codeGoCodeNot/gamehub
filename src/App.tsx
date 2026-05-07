import Navbar from "./components/navbar/components/navbar";
import GameGrid from "./features/game/components/game-grid";
import GenreList from "./features/genre/components/genre-list";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="py-25 px-5">
        <div className="flex justify-between">
          <GenreList />
          <GameGrid />
        </div>
      </main>
    </div>
  );
};

export default App;
