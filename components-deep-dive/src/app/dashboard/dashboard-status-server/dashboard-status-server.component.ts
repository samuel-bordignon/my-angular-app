import { Component } from '@angular/core';
import { DashboardComponet } from '../dashboard.component';

@Component({
  selector: 'app-dashboard-status-server',
  standalone: true,
  imports: [DashboardComponet],
  templateUrl: './dashboard-status-server.component.html',
  styleUrl: './dashboard-status-server.component.css'
})
export class DashboardStatusServerComponent {
  currentStatus: 'offline' | 'online' | unknown = 'offline'
}
