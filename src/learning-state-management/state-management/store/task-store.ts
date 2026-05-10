import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Task = {
  id: number;
  text: string;
};

type TaskStore = {
  tasks: Task[];
  addTask: (task: string) => void;
  removeTask: (id: number) => void;
};

const useTaskStore = create<TaskStore>()(
  devtools(
    (set) => ({
      tasks: [],
      addTask: (task: string) =>
        set((store) => ({
          tasks: [
            {
              id: Date.now(),
              text: task,
            },
            ...store.tasks,
          ],
        })),
      removeTask: (id: number) =>
        set((store) => ({ tasks: store.tasks.filter((t) => t.id !== id) })),
    }),
    { name: "TaskStore" },
  ),
);

export default useTaskStore;
