import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent {
  name = 'Samuel';
  online = true;

  avatar = 'https://i.pravatar.cc/100?img=1';

  changeAvatar() {
    this.avatar = 'https://i.pravatar.cc/100?img=' + Math.floor(Math.random() * 70);
  }
}
