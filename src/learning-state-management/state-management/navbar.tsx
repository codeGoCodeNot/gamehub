import { Badge } from "@/components/ui/badge";
import { useContext } from "react";
import TaskContext from "./context/task-context";
import TaskList from "./tasklist";
import AuthContext from "./context/auth-context";

const Navbar = () => {
  const { tasks } = useContext(TaskContext);
  const { auth } = useContext(AuthContext);

  return (
    <div className="flex flex-col gap-y-4">
      {auth && (
        <>
          <div>
            <h1>Navbar</h1>
            <Badge>{tasks.length}</Badge>
          </div>
          <TaskList />
        </>
      )}
    </div>
  );
};

export default Navbar;
