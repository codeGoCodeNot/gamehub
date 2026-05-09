import { useReducer } from "react";
import taskReducer from "../../reducer/task-reducer";
import TaskContext from "../task-context";

type TaskProviderProps = {
  children: React.ReactNode;
};

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
