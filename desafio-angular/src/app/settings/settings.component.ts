import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  imports: [CommonModule, FormsModule]
})
export class SettingsComponent {
  username = 'samuel';
  email = 'samuel@email.com';
  notifications = true;

}
