import { create } from "zustand";

type Task = {
  id: number;
  text: string;
};

type TaskStore = {
  tasks: Task[];
  addTask: (task: string) => void;
  removeTask: (id: number) => void;
};

const useTaskStore = create<TaskStore>((set) => ({
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
}));

export default useTaskStore;
