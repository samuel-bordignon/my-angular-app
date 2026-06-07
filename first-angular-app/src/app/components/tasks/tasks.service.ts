import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../../../data/dummy-tasks";
import { CreateTask } from "./tasks.model";


@Injectable({ providedIn: "root" })
export class TaskService {
  private tasks = DUMMY_TASKS

  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId == userId)
  }
  constructor() {
    const response = localStorage.getItem('tasks')
    if (response) {
      this.tasks = JSON.parse(response)
    }
  }

  addNewTask(data: CreateTask, userId: string) {
    this.tasks.push({
      ...data,
      id: "t" + this.tasks.length,
      userId: userId
    })
    this.saveTask()
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId)
    this.saveTask()
  }

  saveTask() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks))
  }
}