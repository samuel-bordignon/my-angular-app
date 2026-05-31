import { type Task } from "../task/task.model";

export type CreateTask = Omit<Task, "id" | "userId">