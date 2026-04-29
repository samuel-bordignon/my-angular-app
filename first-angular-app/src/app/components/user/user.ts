import { Component } from '@angular/core';

import { DUMMY_USERS } from '../../../data/dummy-users';

let ramdomID = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[ramdomID];
  get imagePath() {
    return `assets/users/${this.selectedUser.avatar}`;
  }
  onselectUser() {
    const randomID = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomID];
  }
}
