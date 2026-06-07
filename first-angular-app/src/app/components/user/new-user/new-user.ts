import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../ui/modal/modal';
import { UserService } from '../user.service';

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
  private userService = inject(UserService)

  cancel = () => {
    this.closeModal.emit()
  }
  submit = () => {
    this.userService.addNewUser({
      name: this.enteredTitle,
      avatar: ""
    })
    this.closeModal.emit()
  }
}
