import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-status-server',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-status-server.component.html',
  styleUrl: './dashboard-status-server.component.css'
})
export class DashboardStatusServerComponent {
  currentStatus: 'offline' | 'online' | unknown = 'offline'
}
