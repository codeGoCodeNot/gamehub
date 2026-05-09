import type { Genres } from "../genre/type";
import type { Platform } from "../platform/type";

export type Game = {
  id: number;
  name: string;
  slug: string;
  background_image: string; // ← This one!
  rating: number;
  rating_top: number;
  parent_platforms: Array<{
    platform: Platform;
  }>;
  released: string;
  metacritic: number;
  reviews_count: number;
  updated: string;
  genres: Genres[];
};
