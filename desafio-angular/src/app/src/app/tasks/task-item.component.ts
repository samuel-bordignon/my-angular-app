import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent {
  @Input() task: any;

  @Output() remove = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();
}
