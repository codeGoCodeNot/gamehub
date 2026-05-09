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

export type FetchResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};
