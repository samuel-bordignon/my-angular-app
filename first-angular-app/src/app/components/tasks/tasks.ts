import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task";
import { DUMMY_TASKS } from '../../../data/dummy-tasks';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  imports: [TaskComponent]
})
export class TasksComponent {
  @Input({ required: true }) userName?: string
  @Input({ required: true }) userId?: string

  tasks = DUMMY_TASKS

  get selectedTasks() {
    return this.tasks.filter(task => task.userId == this.userId)
  }
  onSelecedUser(name: string) {
    this.userName = name
  }
}
