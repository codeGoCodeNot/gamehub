import ApiClient from "./api-client";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const todoService = new ApiClient<Todo>("/todos");
