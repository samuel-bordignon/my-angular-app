import { Component, EventEmitter, input, Input, Output } from '@angular/core';

interface User {
  id: string
  name: string
  avatar: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User
  @Input({ required: true }) selected: Boolean = false
  @Output() select = new EventEmitter()
  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }
  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
