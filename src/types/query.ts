export type SortOrder =
  | ""
  | "-added"
  | "-released"
  | "name"
  | "-metacritic"
  | "-rating"
  | null;

export type GameQuery = {
  genreId?: number;
  platformId?: number;
  sortOrder: SortOrder;
  searchTerm: string;
};
