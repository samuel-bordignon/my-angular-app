import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTaskComponent {
  @Output() closeModal = new EventEmitter<void>()
  @Output() addTask = new EventEmitter()

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  cancel() {
    this.closeModal.emit()
  }

  submit() {
    this.closeModal.emit()
  }
}
