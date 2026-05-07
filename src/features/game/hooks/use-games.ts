import useData from "@/features/hooks/use-data";
import type { Game } from "../type";

const useGames = () => useData<Game>("/games");

export default useGames;
