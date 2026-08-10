import { Component } from '@angular/core';
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [DashboardComponent],
})
export class AppComponent { }
