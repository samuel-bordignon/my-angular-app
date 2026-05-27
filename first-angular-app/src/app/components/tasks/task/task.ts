import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})

export class TaskComponent {
  @Input({required:true}) task!: Task
  @Output() select = new EventEmitter()

  onCompleteTask(){
    this.select.emit(this.task.id)
  }
}
