import { Badge } from "@/components/ui/badge";
import useAuthStore from "../store/auth-store";
import useCounterStore from "../store/counter-store";
import useTaskStore from "../store/task-store";
import Counter from "./counter";
import TaskList from "./tasklist";

const Navbar = () => {
  const { tasks } = useTaskStore();
  const { username } = useAuthStore();
  const { count } = useCounterStore();

  return (
    <div className="flex flex-col gap-y-4">
      {username && (
        <>
          <div>
            <h1>Navbar</h1>
            <Badge>
              <span>Counter:</span>
              {count}
            </Badge>
            <Badge>
              <span>Task:</span>
              {tasks.length}
            </Badge>
          </div>
          <Counter />
          <TaskList />
        </>
      )}
    </div>
  );
};

export default Navbar;
