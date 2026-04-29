import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../../../data/dummy-users';

const ramdomID = Math.floor(Math.random() * DUMMY_USERS.length)
const bananas = ["banana1","banana2","banana3","banana4","banana5","banana6"]

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[ramdomID]);
  banana = signal(bananas[ramdomID])
  imagePath = computed(()=>"assets/users/" + this.selectedUser().avatar)
  // get imagePath() {
  //   return `assets/users/${this.selectedUser.get("")avatar}`;
  // }
  ramdomBananas(){
      const randomID = Math.floor(Math.random() * DUMMY_USERS.length);
      this.banana.set(bananas[randomID]);
  }
  onselectUser() {
    const randomID = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomID]);
  }
}
