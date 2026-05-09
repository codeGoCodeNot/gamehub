import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card className="overflow-hidden pt-0">
      {/* Image skeleton */}
      <div className="aspect-video overflow-hidden">
        <Skeleton className="w-full h-full" />
      </div>

      {/* Content skeleton */}
      <CardHeader>
        {/* Title skeleton */}
        <Skeleton className="h-6 w-3/4 mb-4" />

        {/* Platforms + Metacritic skeleton */}
        <div className="flex justify-between items-center">
          {/* Platforms skeleton */}
          <div className="flex gap-2">
            <Skeleton className="w-6 h-6 rounded" />
            <Skeleton className="w-6 h-6 rounded" />
            <Skeleton className="w-6 h-6 rounded" />
          </div>

          {/* Metacritic badge skeleton */}
          <Skeleton className="w-12 h-8 rounded-md" />
        </div>
      </CardHeader>
    </Card>
  );
};

export default GameCardSkeleton;
