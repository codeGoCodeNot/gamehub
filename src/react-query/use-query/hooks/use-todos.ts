import { CACHE_KEY_TODOS } from "@/react-query/constant";
import { todoService } from "@/react-query/services/todo-service";
import { useQuery } from "@tanstack/react-query";

const useTodos = () => {
  return useQuery({
    queryKey: CACHE_KEY_TODOS,
    queryFn: () => todoService.getAll(),
    staleTime: 10 * 1000, // 10 seconds
  });
};

export default useTodos;
