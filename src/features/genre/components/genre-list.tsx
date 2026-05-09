import getCroppedImageUrl from "@/services/image-url";
import useGenres from "../hooks/use-genres";
import GenreListSkeleton from "./genre-skeleton";
import type { Genres } from "../type";
import { useState } from "react";

type GenreListProps = {
  onGenreSelect: (genre: Genres | null) => void;
  selectedGenreId: number | undefined;
};

const GenreList = ({ onGenreSelect, selectedGenreId }: GenreListProps) => {
  const { data: genres, isLoading, error } = useGenres();
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedGenres: Genres[] | undefined = isExpanded
    ? genres
    : genres?.slice(0, 7);

  if (isLoading) return <GenreListSkeleton />;
  if (error) return <p>Error loading genres: {error.message}</p>;

  return (
    <div className="flex flex-col gap-y-1 fixed left-2 top-[80px] w-64 h-[calc(100vh-80px)] overflow-y-auto z-10 pr-4">
      <h2 className="text-lg font-semibold mb-4">Genres</h2>
      {displayedGenres?.map((genre) => (
        <button
          key={genre.id}
          className={`flex items-center gap-3 p-2 rounded-lg transition-colors cursor-pointer ${
            selectedGenreId === genre.id
              ? "bg-blue-50 dark:bg-blue-950"
              : "hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
          onClick={() => onGenreSelect(genre)}
        >
          <img
            src={getCroppedImageUrl(genre.image_background)}
            alt={genre.name}
            className="w-10 h-10 rounded-lg object-cover"
          />
          <span className="text-sm font-medium">{genre.name}</span>
        </button>
      ))}

      {genres && genres.length > 7 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline mt-2 py-2"
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default GenreList;
