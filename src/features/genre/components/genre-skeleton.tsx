import { Skeleton } from "@/components/ui/skeleton";

const GenreListSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="flex items-center gap-3 p-2">
          {/* Image skeleton */}
          <Skeleton className="w-10 h-10 rounded-md flex-shrink-0" />

          {/* Text skeleton */}
          <Skeleton className="h-4 flex-1 max-w-[120px]" />
        </div>
      ))}
    </div>
  );
};

export default GenreListSkeleton;
