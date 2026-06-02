import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateTask } from '../tasks.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTaskComponent {
  @Output() closeModal = new EventEmitter<void>()
  @Output() addTask = new EventEmitter<CreateTask>()

  enteredTitle = '';
  enteredSummary = '';
  enteredTime = '';

  cancel() {
    this.closeModal.emit()
  }

  submit() {
    this.addTask.emit({
      summary: this.enteredSummary,
      time: this.enteredTime,
      title: this.enteredTitle
    })
  }
}
