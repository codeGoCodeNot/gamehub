import useTaskStore from "../store/task-store";

const useTask = () => {
  const tasks = useTaskStore((s) => s.tasks);
  const addTask = useTaskStore((s) => s.addTask);
  const removeTask = useTaskStore((s) => s.removeTask);

  return { tasks, addTask, removeTask };
};

export default useTask;
