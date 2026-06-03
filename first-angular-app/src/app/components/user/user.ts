import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';
import { Card } from "../ui/card/card";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [Card],
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
