import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent {
  username = 'samuel';
  email = 'samuel@email.com';
  notifications = true;
}
