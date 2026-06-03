import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task";
import { DUMMY_TASKS } from '../../../data/dummy-tasks';
import { NewTaskComponent } from './new-task/new-task';
import { type CreateTask } from './tasks.model';
import { Card } from "../ui/card/card";


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  imports: [TaskComponent, NewTaskComponent, Card]
})
export class TasksComponent {
  @Input({ required: true }) userName: string = ""
  @Input({ required: true }) userId: string = ""
  isOpenNewTask: boolean = false

  tasks = DUMMY_TASKS

  get selectedTasks() {
    return this.tasks.filter(task => task.userId == this.userId)
  }
  onSelecedUser(name: string) {
    this.userName = name
  }
  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId)
  }
  onNewTask() {
    this.isOpenNewTask = !this.isOpenNewTask
  }
  onCloseNewTask() {
    this.isOpenNewTask = false
  }
  onAddNewTask(data: CreateTask) {
    console.log(data)
    this.tasks.push({
      ...data,
      id: "t",
      userId: this.userId
    })
    this.onCloseNewTask()
  }
}

