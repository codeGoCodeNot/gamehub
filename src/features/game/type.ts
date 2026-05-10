import type { Genres } from "../genre/type";
import type { Platform } from "../platform/type";

export type Publisher = {
  id: number;
  name: string;
};

export type Trailer = {
  id: number;
  name: string;
  preview: string;
  data: {
    480: string;
    max: string;
  };
};

export type Game = {
  id: number;
  name: string;
  slug: string;
  background_image: string; // ← This one!
  rating: number;
  rating_top: number;
  platforms: Array<{
    platform: Platform;
    released_at: string;
    requirements: Record<string, unknown>;
  }>;
  released: string;
  metacritic: number;
  reviews_count: number;
  updated: string;
  genres: Genres[];
  description_raw: string;
  publishers: Publisher[];
};
