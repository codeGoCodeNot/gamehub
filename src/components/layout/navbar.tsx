import gameIcon from "@/assets/game-icon.png";
import ThemeToggle from "@/components/theme/theme-toggle";
import SearchInput from "../search-input";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-1 justify-between items-center border-b px-5 min-h-[60px] bg-background/95 animate-fade-from-top fixed top-0 z-20 w-full">
      <div className="flex items-center gap-x-2">
        <Link to="/">
          <img src={gameIcon} alt="Game Icon" className="w-15 h-15" />
          <h1 className="text-2xl font-semibold items-center hidden sm:flex">
            GameHub
          </h1>
        </Link>
      </div>

      <SearchInput />

      <div className="flex items-center gap-5">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
