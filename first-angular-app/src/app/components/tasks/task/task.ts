import { Component, EventEmitter, Input, input, Output } from '@angular/core';

export type Task = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  time: string;
};

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})

export class TaskComponent {
  // task = input.required<Task>();
  @Input({required:true}) task!: Task
  @Output() complete = new EventEmitter()
  onCompleteTask (){
    this.complete.emit(this.task.id)
  }
}
