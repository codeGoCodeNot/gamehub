import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const useTodos = () => {
  const fetchTodos = async (): Promise<Todo[]> =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);

  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 10 * 1000, // 10 seconds
  });
};

export default useTodos;
