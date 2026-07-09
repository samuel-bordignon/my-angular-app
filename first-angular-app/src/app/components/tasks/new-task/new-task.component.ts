import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId = ""
  @Output() closeModal = new EventEmitter<void>()
  private taskService = inject(TaskService)

  enteredTitle = '';
  enteredSummary = '';
  enteredTime = '';

  cancel() {
    this.closeModal.emit()
  }

  submit() {
    this.taskService.addNewTask({
      summary: this.enteredSummary,
      time: this.enteredTime,
      title: this.enteredTitle
    }, this.userId)
    this.cancel()
  }
}
