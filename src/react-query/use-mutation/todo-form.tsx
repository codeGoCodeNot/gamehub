import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import useTodos from "../use-query/hooks/use-todos";
import useMutateTodo from "./use-mutate-todo";
import type { Todo } from "../services/todo-service";

const TodoForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { data: todos, isLoading, error } = useTodos();
  const {
    mutate,
    error: mutationError,
    reset,
  } = useMutateTodo({
    onAdd: () => {
      reset();
      if (inputRef.current) inputRef.current.value = "";
    },
  });

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    const title = inputRef.current?.value;
    if (title) {
      mutate({
        title,
        completed: false,
      } as Todo);
    }
  };

  return (
    <div className="flex flex-col items-center w-full justify-center min-h-screen gap-4">
      <form onSubmit={handleSubmit}>
        <Card className="max-w-[500px]">
          <CardHeader>
            <CardTitle>Add Todo</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-x-1">
            <Input placeholder="Enter todo" ref={inputRef} />
            <Button type="submit">Add</Button>
          </CardContent>
          <CardFooter>
            {mutationError && (
              <div className="text-red-500">
                Failed to add todo: {mutationError.message}
              </div>
            )}
          </CardFooter>
        </Card>
      </form>
      <Card className="max-w-[500px] w-full">
        <CardHeader>
          <CardTitle>Todos ({todos?.length ?? 0})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {isLoading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>Error: {error.message}</div>
            ) : (
              todos?.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center gap-2 pb-2 border-b"
                >
                  <input type="checkbox" checked={todo.completed} readOnly />
                  <span>{todo.title}</span>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoForm;
