import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  imports: [FormsModule]
})
export class TaskItemComponent {
  @Input() task!: Task;

  @Output() remove = new EventEmitter<number>();
  @Output() taskToggle = new EventEmitter<number>();
}
