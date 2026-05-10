import { Button } from "@/components/ui/button";
import { LucideTrash } from "lucide-react";
import useTaskStore from "../store/task-store";

const TaskList = () => {
  const { tasks, addTask, removeTask } = useTaskStore();

  return (
    <div>
      <Button onClick={() => addTask("New Task" + tasks.length)}>
        Add Task
      </Button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-x-2">
            <span>{task.text}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => removeTask(task.id)}
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
