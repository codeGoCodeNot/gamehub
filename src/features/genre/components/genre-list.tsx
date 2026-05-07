import useData from "@/features/hooks/use-data";
import type { Genres } from "../type";

const GenreList = () => {
  const { data: genres } = useData<Genres>("/genres");

  return (
    <ul>
      {genres?.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
