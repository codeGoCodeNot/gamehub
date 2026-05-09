import { createContext, type Dispatch } from "react";
import type { Action, Task } from "../reducer/task-reducer";

type TasksContextType = {
  tasks: Task[];
  dispatch: Dispatch<Action>;
};

const TaskContext = createContext<TasksContextType>({} as TasksContextType);

export default TaskContext;
