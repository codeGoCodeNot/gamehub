import ThemeToggle from "@/components/theme/theme-toggle";
import gameIcon from "../../../assets/game-icon.png";

const Navbar = () => {
  return (
    <div className="flex flex-1 justify-between items-center border-b px-5 min-h-[60px] bg-background/95 animate-fade-from-top fixed top-0 z-20 w-full">
      <div className="flex items-center gap-x-2">
        <img src={gameIcon} alt="Game Icon" className="w-12 h-12" />
        <h1 className="text-2xl font-semibold flex items-center">GameHub</h1>
      </div>
      <div className="flex items-center gap-5">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
