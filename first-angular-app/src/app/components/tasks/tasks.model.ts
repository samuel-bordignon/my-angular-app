export type Task = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  time: string;
};

export type CreateTask = Omit<Task, "id" | "userId">