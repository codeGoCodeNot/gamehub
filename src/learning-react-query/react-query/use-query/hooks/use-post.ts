import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PostQuery = {
  pageSize: number;
};

const usePost = (query: PostQuery) => {
  const fetchPosts = async ({ pageParam = 0 }) =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _start: pageParam,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);

  return useInfiniteQuery({
    queryKey: ["posts", query],
    queryFn: fetchPosts,
    initialPageParam: 0,
    staleTime: 60 * 1000, // 60 seconds
    placeholderData: keepPreviousData, // Show previous data while fetching new data
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length === query.pageSize
        ? allPages.length * query.pageSize
        : undefined,
  });
};

export default usePost;
