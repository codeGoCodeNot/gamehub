import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import usePost from "./hooks/use-post";

const PostList = () => {
  const pageSize = 7;
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } = usePost(
    { pageSize },
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const posts = data?.pages.flat() ?? [];

  return (
    <div className="w-full flex justify-center mt-10">
      <Card className="max-w-[500px]">
        <CardHeader>
          <h2>Posts</h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {posts?.map((post) => (
              <div key={post.id} className="border-b pb-4">
                <h3 className="font-bold text-lg">{post.title}</h3>
                <p className="text-sm line-clamp-3">{post.body}</p>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="ghost"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading more..." : "Load More"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PostList;
