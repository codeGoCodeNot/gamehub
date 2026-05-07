import type { Genres } from "@/features/genre/type";
import type { Platform } from "@/features/platform/type";

export type GameQuery = {
  genre: Genres | null;
  platform: Platform | null;
};
