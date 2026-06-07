import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../tasks.service';
import { ModalComponent } from '../../ui/modal/modal';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule, ModalComponent],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId = ""
  @Output() closeModal = new EventEmitter<void>()

  modalTitle = "Nova Task"
  enteredTitle = '';
  enteredSummary = '';
  enteredTime = '';

  private taskService = inject(TaskService)

  cancel = () => {
    this.closeModal.emit()
  }

  submit = () => {
    this.taskService.addNewTask({
      summary: this.enteredSummary,
      time: this.enteredTime,
      title: this.enteredTitle
    }, this.userId)
    this.cancel()
  }
}
