import Navbar from "./components/navbar/components/navbar";
import GameGrid from "./features/game/components/game-grid";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="py-25 px-5">
        <GameGrid />
      </main>
    </div>
  );
};

export default App;
