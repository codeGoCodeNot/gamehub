import { useContext } from "react";
import TaskContext from "../context/task-context";

const useTask = () => useContext(TaskContext);

export default useTask;
