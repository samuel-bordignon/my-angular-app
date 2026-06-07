import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../ui/modal/modal';

@Component({
  selector: 'app-new-user',
  imports: [FormsModule, ModalComponent],
  templateUrl: './new-user.html',
  styleUrl: './new-user.css',
})
export class NewUserComponent {
  @Output() closeModal = new EventEmitter()
  enteredTitle = ""
  modalTitle = "Novo Usuário"

  cancel = () => {
    this.closeModal.emit()
  }
  submit = () => {
    this.closeModal.emit()
  }
}
