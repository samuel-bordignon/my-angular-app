import { Component, computed, EventEmitter, input, Input, Output, signal } from '@angular/core';

import { DUMMY_USERS } from '../../../data/dummy-users';

const ramdomID = Math.floor(Math.random() * DUMMY_USERS.length)
const bananas = ["banana1", "banana2", "banana3", "banana4", "banana5", "banana6"]

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string
  @Input({ required: true }) avatar!: string
  @Input({ required: true }) name!: string
  @Output() select = new EventEmitter()
  get imagePath() {
    return `assets/users/${this.avatar}`;
  }
  onSelectUser() { 
    this.select.emit(this.id)
  }

  // Abordagem com signalInputs

  // avatar = input.required<string>()
  // name = input.required<string>()

  // imagePath = computed(()=>{
  //     return 'assets/users/' + this.avatar()
  // })
}
