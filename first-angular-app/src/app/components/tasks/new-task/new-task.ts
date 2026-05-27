import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTaskComponent {
  @Output() closeModal = new EventEmitter<void>()
  @Output() addTask = new EventEmitter()

  cancel(){
    this.closeModal.emit()
  }
  
  add(){
    this.closeModal.emit()

  }
}
