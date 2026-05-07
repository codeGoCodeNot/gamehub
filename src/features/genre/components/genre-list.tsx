import getCroppedImageUrl from "@/services/image-url";
import useGenres from "../hooks/use-genres";
import GenreListSkeleton from "./genre-skeleton";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();

  if (isLoading) return <GenreListSkeleton />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex flex-col gap-y-1">
      {genres?.map((genre) => (
        <div
          key={genre.id}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
        >
          <img
            src={getCroppedImageUrl(genre.image_background)}
            alt={genre.name}
            className="w-10 h-10 rounded-lg object-cover"
          />
          <span className="text-sm font-medium">{genre.name}</span>
        </div>
      ))}
    </div>
  );
};

export default GenreList;
