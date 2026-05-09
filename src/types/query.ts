import type { Genres } from "@/features/genre/type";
import type { Platform } from "@/features/platform/type";

export type SortOrder =
  | ""
  | "-added"
  | "-released"
  | "name"
  | "-metacritic"
  | "-rating"
  | null;

export type GameQuery = {
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: SortOrder;
  searchTerm: string;
};

export type FetchResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};
