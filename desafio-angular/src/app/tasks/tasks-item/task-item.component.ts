import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent {
  @Input() task!: Task;

  @Output() remove = new EventEmitter<number>();
  @Output() taskToggle = new EventEmitter<number>();
}
