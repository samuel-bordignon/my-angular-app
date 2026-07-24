import { Component } from '@angular/core';
import { DashboardCardComponent } from '../dashboard-card.component';

@Component({
  selector: 'app-dashboard-status-server',
  standalone: true,
  imports: [DashboardCardComponent],
  templateUrl: './dashboard-status-server.component.html',
  styleUrl: './dashboard-status-server.component.css'
})
export class DashboardStatusServerComponent {
  currentStatus: 'offline' | 'online' | unknown = 'offline'
}
