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
