type Task = {
  id: string;
  title: string;
};

type AddTask = {
  type: "ADD_TASK";
  task: Task;
};

type RemoveTask = {
  type: "REMOVE_TASK";
  taskId: string;
};

type Action = AddTask | RemoveTask;

const taskReducer = (state: Task[], action: Action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [action.task, ...state];
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.taskId);
    default:
      return state;
  }
};

export default taskReducer;
