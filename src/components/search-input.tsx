import useGameQuery from "@/state-management/hooks/use-game-query";
import { LucideSearch } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const { setSearch } = useGameQuery();
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const debounced = useDebouncedCallback((value) => {
    setSearch(value);
  }, 200);

  return (
    <div className="w-2/3 relative" onClick={handleHome}>
      <LucideSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
      <Input
        placeholder="Search"
        className="pl-9 rounded-full"
        onChange={(e) => debounced(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
