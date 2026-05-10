import useGameQueryStore from "../stores/game-query-store";

const useGameQuery = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const setSearch = useGameQueryStore((s) => s.setSearch);
  const setGenre = useGameQueryStore((s) => s.setGenre);
  const setPlatform = useGameQueryStore((s) => s.setPlatform);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  return { gameQuery, setSearch, setGenre, setPlatform, setSortOrder };
};

export default useGameQuery;
