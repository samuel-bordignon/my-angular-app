import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { type Task } from '../tasks.model';
import { DatePipe } from '@angular/common';
import { Card } from "../../ui/card/card";

@Component({
  selector: 'app-task',
  imports: [DatePipe, Card],
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
