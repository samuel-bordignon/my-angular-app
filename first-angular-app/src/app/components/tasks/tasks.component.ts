import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task";
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  standalone: false,
})
export class TasksComponent {
  @Input({ required: true }) userName: string = ""
  @Input({ required: true }) userId: string = ""
  isOpenNewTask: boolean = false

  constructor(private taskService: TaskService) { }

  get selectedTasks() {
    return this.taskService.getUserTasks(this.userId)
  }
  onSelecedUser(name: string) {
    this.userName = name
  }
  onOpenNewTask() {
    this.isOpenNewTask = true
  }
  onCloseNewTask() {
    this.isOpenNewTask = false
  }
}

