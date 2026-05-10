import { Badge } from "@/components/ui/badge";
import useAuth from "../hooks/use-auth";
import useCounter from "../hooks/use-counter";
import useTask from "../hooks/use-task";
import Counter from "./counter";
import TaskList from "./tasklist";

const Navbar = () => {
  const { tasks } = useTask();
  const { username } = useAuth();
  const { count } = useCounter();

  console.log("Navbar rendered");

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
