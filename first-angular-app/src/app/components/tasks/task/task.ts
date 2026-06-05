import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Task } from '../tasks.model';
import { DatePipe } from '@angular/common';
import { Card } from "../../ui/card/card";
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [DatePipe, Card],
  templateUrl: './task.html',
  styleUrl: './task.css',
})

export class TaskComponent {
  @Input({required:true}) task!: Task
  private taskService = inject(TaskService)

  onCompleteTask(){
    this.taskService.deleteTask(this.task.id)
  }
}
