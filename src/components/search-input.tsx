import { LucideSearch } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "./ui/input";

type SearchInputProps = {
  onSearch: (searchTerm: string) => void;
};

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const debounced = useDebouncedCallback((value) => {
    onSearch(value);
  }, 200);

  return (
    <div className="w-2/3 relative">
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
