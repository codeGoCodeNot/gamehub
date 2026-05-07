export type Game = {
  id: number;
  name: string;
  slug: string;
  background_image: string; // ← This one!
  rating: number;
  rating_top: number;
  released: string;
  metacritic?: number;
  reviews_count: number;
  updated: string;
};
