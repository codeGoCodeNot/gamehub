import useData from "@/features/hooks/use-data";
import type { Genres } from "../type";

const useGenres = () => useData<Genres>("/genres");

export default useGenres;
