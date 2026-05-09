import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constant";
import { todoService, type Todo } from "../services/todo-service";

type UseMutateTodoProps = {
  onAdd: () => void;
};

const useMutateTodo = ({ onAdd }: UseMutateTodoProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (todo: Todo) => todoService.post(todo),

    onMutate: (newTodo: Todo) => {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
        newTodo,
        ...(todos ?? []),
      ]);

      return { previousTodos };
    },
    onSuccess: (savedTodo) => {
      //   queryClient.invalidateQueries({ queryKey: ["todos"] });
      onAdd();
      queryClient.setQueryData<Todo[]>(
        CACHE_KEY_TODOS,
        (todos) =>
          todos?.map((todo) => (todo.id === savedTodo.id ? savedTodo : todo)) ??
          [],
      );
    },

    onError: (_error, _newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });
};

export default useMutateTodo;
