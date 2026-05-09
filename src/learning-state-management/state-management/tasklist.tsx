import { Button } from "@/components/ui/button";
import { useReducer } from "react";
import taskReducer from "./reducer/task-reducer";
import { LucideTrash } from "lucide-react";

const TaskList = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <div>
      <Button
        onClick={() =>
          dispatch({
            type: "ADD_TASK",
            task: {
              id: Date.now().toString(),
              title: `New Task - ${new Date().toLocaleString()}`,
            },
          })
        }
      >
        Add Task
      </Button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-x-2">
            <span>{task.title}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => dispatch({ type: "REMOVE_TASK", taskId: task.id })}
            >
              <LucideTrash />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
