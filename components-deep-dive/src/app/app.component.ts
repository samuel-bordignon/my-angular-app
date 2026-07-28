import { Component } from '@angular/core';
import { DashboardStatusServerComponent } from './dashboard/dashboard-status-server/dashboard-status-server.component';
import { DashboardTrafficComponent } from './dashboard/dashboard-traffic/dashboard-traffic.component';
import { DashboardSuportComponent } from './dashboard/dashboard-suport/dashboard-suport.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports:[
    DashboardStatusServerComponent,
    DashboardTrafficComponent,
    DashboardSuportComponent,
    HeaderComponent
  ]
})
export class AppComponent {
}
