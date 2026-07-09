import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Task } from '../tasks.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  standalone: false,
  styleUrl: './task.css',
})

export class TaskComponent {
  @Input({ required: true }) task!: Task
  private taskService = inject(TaskService)

  onCompleteTask() {
    this.taskService.deleteTask(this.task.id)
  }
}
