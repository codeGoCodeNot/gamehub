import useTodos from "./hooks/use-todos";

const TodoList = () => {
  const { data: todos, isLoading, error } = useTodos();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      {todos?.map((todo) => (
        <div key={todo.id} className="border-b">
          {todo.title}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
