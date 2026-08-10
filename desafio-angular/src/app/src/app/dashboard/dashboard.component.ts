import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  title = 'Painel Angular';
  darkMode = false;
  progress = 45;
}
